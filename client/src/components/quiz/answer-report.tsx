import React from 'react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, Globe, PieChart, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface AnswerReportProps {
  answers: Record<string, string>;
  questions: Array<{
    id: number;
    category: string;
    type: string;
    question: string;
  }>;
  onExport?: () => void;
}

export function AnswerReport({ answers, questions, onExport }: AnswerReportProps) {
  // Group questions by category
  const categories = Array.from(new Set(questions.map(q => q.category)));

  const formatAnswer = (answer: string | undefined, type: string) => {
    if (!answer) return 'Not answered';
    
    if (type === 'website-upload') {
      try {
        const data = JSON.parse(answer);
        if (data.type === 'url') {
          return (
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-primary" />
              <a href={data.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {data.url}
              </a>
            </div>
          );
        } else if (data.type === 'file') {
          return (
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4 text-primary" />
              <span>{data.name}</span>
              <span className="text-xs text-muted-foreground">
                ({(data.size / 1024 / 1024).toFixed(2)} MB)
              </span>
            </div>
          );
        }
      } catch (e) {
        console.error('Error parsing answer:', e);
        return answer;
      }
    }

    // Handle array answers (multiple choice)
    if (answer.startsWith('[') && answer.endsWith(']')) {
      try {
        const choices = JSON.parse(answer);
        return Array.isArray(choices) ? choices.join(', ') : answer;
      } catch (e) {
        return answer;
      }
    }
    
    return answer;
  };

  if (!questions.length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No questions available
      </div>
    );
  }

  if (!Object.keys(answers).length) {
    return (
      <div className="text-center py-8 text-gray-500">
        No answers recorded
      </div>
    );
  }

  return (
    <Card className="p-6 bg-background/50 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <PieChart className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">Your Answers</h2>
        </div>
        {onExport && (
          <Button onClick={onExport} variant="outline" className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </Button>
        )}
      </div>

      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-8">
          {categories.map((category, index) => {
            const categoryQuestions = questions.filter(q => q.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                  {category}
                </h3>
                <div className="space-y-6">
                  {categoryQuestions.map((question) => (
                    <motion.div
                      key={question.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-card rounded-lg p-4 border border-border/50"
                    >
                      <p className="font-medium text-foreground mb-2">{question.question}</p>
                      <div className="text-muted-foreground">
                        {formatAnswer(answers[question.id.toString()], question.type)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
} 