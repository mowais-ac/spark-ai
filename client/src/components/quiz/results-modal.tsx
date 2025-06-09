import { useQuery, useMutation } from '@tanstack/react-query';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Download, RotateCcw, Eye, X } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';
import type { QuizResult, Question, QuizSession } from '@shared/schema';
import { AnswerReport } from './answer-report';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ResultsModalProps {
  sessionId: number;
  onClose: () => void;
  onNewAssessment: () => void;
}

export function ResultsModal({ sessionId, onClose, onNewAssessment }: ResultsModalProps) {
  const { data: results = [], isLoading: isLoadingResults } = useQuery<QuizResult[]>({
    queryKey: ['/api/quiz-results/session', sessionId],
  });

  const { data: questions = [], isLoading: isLoadingQuestions } = useQuery<Question[]>({
    queryKey: ['/api/questions'],
  });

  const { data: session, isLoading: isLoadingSession } = useQuery<QuizSession>({
    queryKey: ['/api/quiz-sessions', sessionId],
  });

  const exportMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`/api/quiz-results/${results[0]?.id}/export`);
      return response.json();
    },
    onSuccess: (data) => {
      console.log('Export initiated:', data);
      // In a real implementation, this would trigger a download
    },
  });

  const result = results[0];
  const isLoading = isLoadingResults || isLoadingQuestions || isLoadingSession;

  if (isLoading) {
    return (
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (!result || !session) return null;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number): "default" | "secondary" | "destructive" => {
    if (score >= 80) return 'default';
    if (score >= 60) return 'secondary';
    return 'destructive';
  };

  const categoryBreakdown = result.categoryBreakdown as Record<string, { correct: number; total: number }>;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Assessment Results</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="summary">Summary</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Report</TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="space-y-6 mt-6">
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overall Score</h3>
                  <div className="flex items-center space-x-4">
                    <span className={`text-4xl font-bold ${getScoreColor(result.overallScore)}`}>
                      {result.overallScore}%
                    </span>
                    <Badge variant={getScoreBadgeVariant(result.overallScore)}>
                      {result.correctAnswers} / {result.totalQuestions} correct
                    </Badge>
                  </div>
                </div>
                <div className="space-x-2">
                  <Button variant="outline" onClick={onNewAssessment}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    New Assessment
                  </Button>
                  <Button onClick={() => exportMutation.mutate()}>
                    <Download className="w-4 h-4 mr-2" />
                    Export Results
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="detailed" className="mt-6">
            <AnswerReport
              answers={session?.answers as unknown as Record<string, string>}
              questions={questions}
              onExport={() => exportMutation.mutate()}
            />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
