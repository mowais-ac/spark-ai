import { 
  users, 
  quizSessions, 
  questions, 
  quizResults,
  type User, 
  type InsertUser, 
  type QuizSession, 
  type InsertQuizSession,
  type Question,
  type InsertQuestion,
  type QuizResult,
  type InsertQuizResult
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Quiz Session methods
  createQuizSession(session: InsertQuizSession): Promise<QuizSession>;
  getQuizSession(id: number): Promise<QuizSession | undefined>;
  updateQuizSession(id: number, updates: Partial<QuizSession>): Promise<QuizSession | undefined>;
  
  // Question methods
  getAllQuestions(): Promise<Question[]>;
  getQuestionsByCategory(category: string): Promise<Question[]>;
  createQuestion(question: InsertQuestion): Promise<Question>;
  
  // Quiz Result methods
  createQuizResult(result: InsertQuizResult): Promise<QuizResult>;
  getQuizResultsBySession(sessionId: number): Promise<QuizResult[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private quizSessions: Map<number, QuizSession>;
  private questions: Map<number, Question>;
  private quizResults: Map<number, QuizResult>;
  private currentUserId: number;
  private currentSessionId: number;
  private currentQuestionId: number;
  private currentResultId: number;

  constructor() {
    this.users = new Map();
    this.quizSessions = new Map();
    this.questions = new Map();
    this.quizResults = new Map();
    this.currentUserId = 1;
    this.currentSessionId = 1;
    this.currentQuestionId = 1;
    this.currentResultId = 1;
    
    // Initialize with sample questions
    this.initializeQuestions();
  }

  private initializeQuestions() {
    const sampleQuestions: InsertQuestion[] = [
      // General Questions
      {
        category: "General Questions",
        type: "website-upload",
        question: "Please provide your company website URL and upload any relevant documentation (business plans, process documents, etc.)",
        options: null,
        correctAnswer: "",
        explanation: "Understanding your business context",
        order: 0,
        allowedFileTypes: ["pdf", "doc", "docx", "txt"],
        maxFileSize: 10485760 // 10MB
      },
      {
        category: "General Questions",
        type: "text",
        question: "What are the top 3 repetitive or time-consuming tasks in your business right now?",
        options: [],
        correctAnswer: "",
        explanation: "Helps identify key automation opportunities",
        order: 1
      },
      {
        category: "General Questions",
        type: "multiple-choice",
        question: "Have you used any AI tools or automation systems before?",
        options: [
          "Yes, extensively",
          "Yes, but only basic tools",
          "No, but interested",
          "No, not interested",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Understanding previous automation experience",
        order: 2
      },
      // Department Selection
      {
        category: "Department Focus",
        type: "multiple-choice-multiple",
        question: "Which department(s) would benefit most from automation?",
        options: [
          "Sales",
          "Marketing",
          "HR",
          "Operations",
          "Customer Support",
          "Strategy/Leadership"
        ],
        correctAnswer: "",
        explanation: "Identifying priority areas for automation",
        order: 3
      },
      // Sales Department
      {
        category: "Sales Department",
        type: "multiple-choice",
        question: "How do you currently manage your sales leads?",
        options: [
          "Manual spreadsheets",
          "Basic CRM",
          "Advanced CRM with automation",
          "No formal system",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Understanding sales process maturity",
        order: 4
      },
      {
        category: "Sales Department",
        type: "multiple-choice",
        question: "How are your follow-up emails handled?",
        options: [
          "Manual sending",
          "Basic email templates",
          "Automated sequences",
          "No systematic follow-up",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Assessing email automation needs",
        order: 5
      },
      {
        category: "Sales Department",
        type: "multiple-choice",
        question: "Is your CRM automatically updated or done manually?",
        options: [
          "Fully manual updates",
          "Partially automated",
          "Fully automated",
          "No CRM system",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Evaluating CRM automation level",
        order: 6
      },
      {
        category: "Sales Department",
        type: "text",
        question: "How do you track deals and pipeline progress?",
        options: [],
        correctAnswer: "",
        explanation: "Understanding pipeline management",
        order: 7
      },
      {
        category: "Sales Department",
        type: "multiple-choice",
        question: "Are meeting summaries or call notes being done manually?",
        options: [
          "Yes, fully manual",
          "Using templates",
          "AI-assisted summaries",
          "No systematic recording",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Assessing meeting documentation process",
        order: 8
      },
      // Marketing Department
      {
        category: "Marketing Department",
        type: "text",
        question: "How do you currently plan and schedule content?",
        options: [],
        correctAnswer: "",
        explanation: "Understanding content management process",
        order: 9
      },
      {
        category: "Marketing Department",
        type: "multiple-choice",
        question: "Are you using AI for content creation?",
        options: [
          "Yes, extensively",
          "Sometimes for specific tasks",
          "No, but interested",
          "No, prefer human-only content",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Assessing AI adoption in content creation",
        order: 10
      },
      {
        category: "Marketing Department",
        type: "multiple-choice",
        question: "How do you handle email marketing personalization?",
        options: [
          "No personalization",
          "Basic merge fields",
          "Behavior-based automation",
          "Advanced AI personalization",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Understanding email marketing sophistication",
        order: 11
      },
      // HR Department
      {
        category: "HR Department",
        type: "multiple-choice",
        question: "How is your candidate sourcing handled?",
        options: [
          "Manual job board posting",
          "Basic ATS system",
          "AI-powered sourcing",
          "External recruiters",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Evaluating recruitment automation",
        order: 12
      },
      {
        category: "HR Department",
        type: "multiple-choice",
        question: "How do you handle employee onboarding?",
        options: [
          "Manual process",
          "Checklist-based",
          "Automated workflow",
          "No formal process",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Understanding onboarding efficiency",
        order: 13
      },
      // Operations Department
      {
        category: "Operations Department",
        type: "text",
        question: "What are your main recurring tasks in day-to-day ops?",
        options: [],
        correctAnswer: "",
        explanation: "Identifying automation opportunities",
        order: 14
      },
      {
        category: "Operations Department",
        type: "multiple-choice",
        question: "How do you track project progress?",
        options: [
          "Manual updates",
          "Project management tool",
          "Automated tracking system",
          "No systematic tracking",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Assessing project management maturity",
        order: 15
      },
      // Customer Support
      {
        category: "Customer Support",
        type: "multiple-choice-multiple",
        question: "What support channels do you currently use?",
        options: [
          "Email",
          "Live Chat",
          "Phone",
          "Social Media",
          "Help Center",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Understanding support infrastructure",
        order: 16
      },
      {
        category: "Customer Support",
        type: "multiple-choice",
        question: "Do you use AI-powered chatbots for support?",
        options: [
          "Yes, extensively",
          "Basic automation only",
          "No, but interested",
          "No, prefer human-only",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Assessing AI adoption in support",
        order: 17
      },
      // Executive/Strategy
      {
        category: "Executive/Strategy",
        type: "multiple-choice",
        question: "How do you handle business intelligence and reporting?",
        options: [
          "Manual reports",
          "Basic BI tools",
          "Advanced analytics platform",
          "AI-powered insights",
          "Other"
        ],
        correctAnswer: "",
        explanation: "Understanding decision-making process",
        order: 18
      },
      {
        category: "Executive/Strategy",
        type: "text",
        question: "What metrics or dashboards do you check weekly?",
        options: [],
        correctAnswer: "",
        explanation: "Identifying key performance indicators",
        order: 19
      }
    ];

    sampleQuestions.forEach(q => {
      const question: Question = {
        ...q,
        id: this.currentQuestionId++,
        options: q.options || null,
        explanation: q.explanation || null,
        allowedFileTypes: q.allowedFileTypes || null,
        maxFileSize: q.maxFileSize || null
      };
      this.questions.set(question.id, question);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Quiz Session methods
  async createQuizSession(insertSession: InsertQuizSession): Promise<QuizSession> {
    const id = this.currentSessionId++;
    const session: QuizSession = {
      ...insertSession,
      id,
      userId: insertSession.userId || null,
      startTime: new Date(),
      endTime: null,
      currentQuestionIndex: 0,
      timeRemaining: 1800,
      answers: {},
      isCompleted: false,
      score: null,
      categoryScores: {}
    };
    this.quizSessions.set(id, session);
    return session;
  }

  async getQuizSession(id: number): Promise<QuizSession | undefined> {
    return this.quizSessions.get(id);
  }

  async updateQuizSession(id: number, updates: Partial<QuizSession>): Promise<QuizSession | undefined> {
    const session = this.quizSessions.get(id);
    if (!session) return undefined;
    
    const updatedSession = { ...session, ...updates };
    this.quizSessions.set(id, updatedSession);
    return updatedSession;
  }

  // Question methods
  async getAllQuestions(): Promise<Question[]> {
    return Array.from(this.questions.values()).sort((a, b) => a.order - b.order);
  }

  async getQuestionsByCategory(category: string): Promise<Question[]> {
    return Array.from(this.questions.values())
      .filter(q => q.category === category)
      .sort((a, b) => a.order - b.order);
  }

  async createQuestion(insertQuestion: InsertQuestion): Promise<Question> {
    const id = this.currentQuestionId++;
    const question: Question = {
      ...insertQuestion,
      id,
      options: insertQuestion.options || null,
      explanation: insertQuestion.explanation || null,
      allowedFileTypes: insertQuestion.allowedFileTypes || null,
      maxFileSize: insertQuestion.maxFileSize || null
    };
    this.questions.set(id, question);
    return question;
  }

  // Quiz Result methods
  async createQuizResult(insertResult: InsertQuizResult): Promise<QuizResult> {
    const id = this.currentResultId++;
    const result: QuizResult = {
      ...insertResult,
      id,
      completedAt: new Date()
    };
    this.quizResults.set(id, result);
    return result;
  }

  async getQuizResultsBySession(sessionId: number): Promise<QuizResult[]> {
    return Array.from(this.quizResults.values()).filter(r => r.sessionId === sessionId);
  }
}

export const storage = new MemStorage();
