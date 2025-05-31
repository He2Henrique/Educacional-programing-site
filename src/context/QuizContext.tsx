import React, { createContext, useContext, useState, useCallback } from 'react';
import { questionsData } from '../data/questions';

// Define types
interface Question {
  id: string;
  type: 'multiple-choice' | 'output' | 'correction';
  title: string;
  category: string;
  [key: string]: any; // Additional properties depend on question type
}

interface QuizContextType {
  score: number;
  errors: number;
  questionsAnswered: number;
  currentQuestion: Question | null;
  weaknesses: string[];
  incrementScore: () => void;
  incrementErrors: () => void;
  getNextQuestion: () => void;
  resetQuiz: () => void;
  addWeakness: (category: string) => void;
}

// Create context
const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Provider component
export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);

  // Get a random question that hasn't been answered yet
  const getNextQuestion = useCallback(() => {
    // Filter out questions that have already been answered
    const availableQuestions = questionsData.filter(
      (q) => !answeredQuestions.includes(q.id)
    );
    
    // If all questions have been answered, reset the answered questions (but keep other stats)
    if (availableQuestions.length === 0) {
      setAnsweredQuestions([]);
      setCurrentQuestion(questionsData[Math.floor(Math.random() * questionsData.length)] as Question);
      return;
    }
    
    // Get a random question from the available questions
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const nextQuestion = availableQuestions[randomIndex];
    
    // Update state
    setCurrentQuestion({
      ...nextQuestion,
      type: nextQuestion.type as 'multiple-choice' | 'output' | 'correction',
    });
    setAnsweredQuestions((prev) => [...prev, nextQuestion.id]);
  }, [answeredQuestions]);

  const incrementScore = useCallback(() => {
    setScore((prev) => prev + 1);
    setQuestionsAnswered((prev) => prev + 1);
  }, []);

  const incrementErrors = useCallback(() => {
    setErrors((prev) => prev + 1);
    setQuestionsAnswered((prev) => prev + 1);
  }, []);

  const resetQuiz = useCallback(() => {
    setErrors(0);
    setCurrentQuestion(null);
    setAnsweredQuestions([]);
  }, []);

  const addWeakness = useCallback((category: string) => {
    setWeaknesses((prev) => [...prev, category]);
  }, []);

  const value = {
    score,
    errors,
    questionsAnswered,
    currentQuestion,
    weaknesses,
    incrementScore,
    incrementErrors,
    getNextQuestion,
    resetQuiz,
    addWeakness,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

// Custom hook for using the context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};