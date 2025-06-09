import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { VoiceInput } from './voice-input';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  type: string;
  question: string;
  options: string[];
}

interface QuestionCardProps {
  question: Question;
  value: any;
  onChange: (value: any) => void;
}

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  const [otherText, setOtherText] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleVoiceInput = (text: string) => {
    switch (question.type) {
      case 'text':
        onChange(text);
        break;
      case 'single':
        const matchedOption = question.options.find(
          option => option.toLowerCase() === text.toLowerCase()
        );
        if (matchedOption) {
          onChange(matchedOption);
        } else {
          setShowOtherInput(true);
          setOtherText(text);
          onChange('Other');
        }
        break;
      case 'multiple':
        const matchedOptions = text.toLowerCase().split('and').map(t => t.trim());
        const newValue = [...(Array.isArray(value) ? value : [])];
        matchedOptions.forEach(option => {
          const match = question.options.find(
            o => o.toLowerCase() === option
          );
          if (match && !newValue.includes(match)) {
            newValue.push(match);
          }
        });
        onChange(newValue);
        break;
    }
  };

  const renderInput = () => {
    switch (question.type) {
      case 'text':
        return (
          <div className="space-y-4">
            <Input
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Type your answer..."
              className="w-full"
            />
            <VoiceInput onResult={handleVoiceInput} />
          </div>
        );
      
      case 'single':
        return (
          <div className="space-y-4">
            <RadioGroup 
              value={value} 
              onValueChange={(val) => {
                onChange(val);
                setShowOtherInput(val === 'Other');
                if (val !== 'Other') {
                  setOtherText('');
                }
              }}
            >
              {question.options.filter(opt => opt !== 'Other').map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Other" id="Other" />
                <Label htmlFor="Other">Other</Label>
              </div>
            </RadioGroup>

            <AnimatePresence>
              {showOtherInput && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <Input
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                    placeholder="Please specify..."
                    className="mt-2"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            
            <VoiceInput onResult={handleVoiceInput} />
          </div>
        );
      
      case 'multiple':
        const selectedValues = Array.isArray(value) ? value : [];
        return (
          <div className="space-y-4">
            {question.options.filter(opt => opt !== 'Other').map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={option}
                  checked={selectedValues.includes(option)}
                  onCheckedChange={(checked) => {
                    const newValue = checked
                      ? [...selectedValues, option]
                      : selectedValues.filter((v) => v !== option);
                    onChange(newValue);
                  }}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="Other"
                checked={selectedValues.includes('Other')}
                onCheckedChange={(checked) => {
                  setShowOtherInput(!!checked);
                  const newValue = checked
                    ? [...selectedValues, 'Other']
                    : selectedValues.filter((v) => v !== 'Other');
                  onChange(newValue);
                  if (!checked) {
                    setOtherText('');
                  }
                }}
              />
              <Label htmlFor="Other">Other</Label>
            </div>

            <AnimatePresence>
              {showOtherInput && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <Input
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                    placeholder="Please specify..."
                    className="mt-2"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <VoiceInput onResult={handleVoiceInput} />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Card className="quiz-card">
      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
      {renderInput()}
    </Card>
  );
} 