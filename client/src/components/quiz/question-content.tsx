import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Flag, ChevronLeft, ChevronRight, Send, CheckCircle, Plus } from 'lucide-react';
import type { Question } from '@shared/schema';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VoiceInput } from './voice-input';
import { FileUpload } from './file-upload';

interface QuestionContentProps {
  question: Question;
  answer: string;
  onAnswerChange: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onFlag: () => void;
  isFlagged: boolean;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isLastQuestion: boolean;
  progressPercentage: number;
}

export function QuestionContent({
  question,
  answer,
  onAnswerChange,
  onNext,
  onPrevious,
  onFlag,
  isFlagged,
  canGoNext,
  canGoPrevious,
  isLastQuestion
}: QuestionContentProps) {
  const [otherText, setOtherText] = useState("");
  const [selectedOption, setSelectedOption] = useState(answer);

  useEffect(() => {
    if (answer.startsWith("Other: ")) {
      setOtherText(answer.substring(7));
      setSelectedOption("Other");
    } else {
      setSelectedOption(answer);
      setOtherText("");
    }
  }, [answer]);

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
    if (value === "Other") {
      onAnswerChange(`Other: ${otherText}`);
    } else {
      onAnswerChange(value);
    }
  };

  const handleOtherTextChange = (text: string) => {
    setOtherText(text);
    onAnswerChange(`Other: ${text}`);
  };

  const handleVoiceInput = (text: string) => {
    if (question.type === 'text') {
      onAnswerChange(text);
    } else if (question.type === 'multiple-choice' || question.type === 'multiple-choice-multiple') {
      const options = question.options as string[];
      const matchedOption = options.find(
        (option: string) => option.toLowerCase() === text.toLowerCase()
      );
      if (matchedOption) {
        handleOptionChange(matchedOption);
      } else {
        handleOptionChange('Other');
        handleOtherTextChange(text);
      }
    }
  };

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'multiple-choice':
      case 'multiple-choice-multiple':
        return (
          <RadioGroup value={selectedOption} onValueChange={handleOptionChange}>
            <div className="space-y-4">
              {[...(question.options as string[]), "Other"].map((option, index) => (
                <motion.div 
                  key={index} 
                  className="quiz-option group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative flex items-center p-4 rounded-xl border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]">
                    <RadioGroupItem 
                      value={option} 
                      id={`option-${index}`}
                      className="mt-1 text-primary border-2 border-primary/30"
                    />
                    <Label 
                      htmlFor={`option-${index}`}
                      className="text-foreground cursor-pointer flex-1 font-medium text-base leading-relaxed ml-4"
                    >
                      {option}
                    </Label>
                    {option === "Other" && (
                      <Plus className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                    )}
                  </div>
                  <AnimatePresence>
                    {selectedOption === "Other" && option === "Other" && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-12 mt-3 p-4 rounded-xl border-2 border-primary/20 bg-background/30 backdrop-blur-sm">
                          <Textarea
                            value={otherText}
                            onChange={(e) => handleOtherTextChange(e.target.value)}
                            placeholder="Please specify your answer..."
                            className="min-h-[100px] resize-none bg-background/50 border-primary/30 focus:border-primary transition-colors duration-300"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </RadioGroup>
        );

      case 'text':
        return (
          <div className="space-y-4">
            <Textarea
              value={answer}
              onChange={(e) => onAnswerChange(e.target.value)}
              placeholder="Enter your answer here..."
              className="min-h-[120px] resize-none bg-background/50 border-primary/30 focus:border-primary transition-colors duration-300 rounded-xl p-4"
            />
            <div className="flex items-center justify-center">
              <VoiceInput 
                onResult={handleVoiceInput} 
                placeholder="Click to speak your answer..."
              />
            </div>
          </div>
        );

      case 'website-upload':
        return (
          <div className="space-y-6">
            <FileUpload
              onFileUpload={(file) => {
                // Handle file upload
                console.log('File uploaded:', file);
                onAnswerChange(JSON.stringify({
                  type: 'file',
                  name: file.name,
                  size: file.size
                }));
              }}
              onWebsiteSubmit={(url) => {
                // Handle website URL submission
                console.log('Website URL submitted:', url);
                onAnswerChange(JSON.stringify({
                  type: 'url',
                  url: url
                }));
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    if (question.type === 'text') {
      return answer.trim().length > 0;
    }
    if (selectedOption === "Other") {
      return otherText.trim().length > 0;
    }
    return answer !== '';
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <motion.div 
          className="flex items-center space-x-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <span className="text-primary text-lg font-bold">Q</span>
          </div>
          <h2 className="text-xl font-semibold text-foreground leading-relaxed">
            {question.question}
          </h2>
        </motion.div>
        
        <div className="space-y-4">
          {renderQuestionInput()}
        </div>
      </div>

      <motion.div 
        className="flex items-center justify-between pt-6 border-t border-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button
          variant="ghost"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground glass-effect"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </Button>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            onClick={onFlag}
            className={`flex items-center space-x-2 glass-effect transition-all duration-300 ${
              isFlagged 
                ? 'text-orange-400 hover:text-orange-300 glow-effect' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Flag className={`w-4 h-4 ${isFlagged ? 'fill-current' : ''}`} />
            <span>Flag for Review</span>
          </Button>
          
          <Button
            onClick={onNext}
            disabled={!canProceed()}
            className="flex items-center space-x-2 gradient-bg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {canProceed() && <CheckCircle className="w-4 h-4" />}
            <span>{isLastQuestion ? 'Submit Assessment' : 'Next Question'}</span>
            {!isLastQuestion ? <ChevronRight className="w-4 h-4" /> : <Send className="w-4 h-4" />}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
