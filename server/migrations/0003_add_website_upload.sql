-- Add new columns for website upload functionality
ALTER TABLE questions
ADD COLUMN allowed_file_types JSONB DEFAULT '["pdf", "doc", "docx", "txt"]',
ADD COLUMN max_file_size INTEGER DEFAULT 10485760; -- 10MB in bytes

-- Update existing type check constraint
ALTER TABLE questions DROP CONSTRAINT IF EXISTS valid_question_type;
ALTER TABLE questions ADD CONSTRAINT valid_question_type 
  CHECK (type IN ('multiple-choice', 'true-false', 'short-answer', 'website-upload')); 