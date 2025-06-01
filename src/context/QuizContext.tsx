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
  answeredQuestions: string[];
  wrongQuestions: Question[];
  showCongratulations: boolean;
  getNextQuestion: () => void;
  incrementScore: () => void;
  incrementErrors: () => void;
  resetQuiz: () => void;
  addWeakness: (category: string) => void;
  addWrongQuestion: (question: Question) => void;
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
  const [wrongQuestions, setWrongQuestions] = useState<Question[]>([]);
  const [showCongratulations, setShowCongratulations] = useState(false);

  // Get a random question that hasn't been answered yet
  const getNextQuestion = useCallback(() => {
    // Filter out questions that have already been answered
    const availableQuestions = questionsData.filter(
      (q) => !answeredQuestions.includes(q.id)
    );
    
    // If all questions have been answered correctly
    if (availableQuestions.length === 0 && errors === 0) {
      setShowCongratulations(true);
      setCurrentQuestion(null);
      return;
    }
    
    // If all questions have been answered but there were errors
    if (availableQuestions.length === 0) {
      setCurrentQuestion(null);
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
  }, [answeredQuestions, errors]);

  const incrementScore = useCallback(() => {
    setScore((prev) => prev + 1);
    setQuestionsAnswered((prev) => prev + 1);
  }, []);

  const incrementErrors = useCallback(() => {
    setErrors((prev) => prev + 1);
    setQuestionsAnswered((prev) => prev + 1);
  }, []);

  const resetQuiz = useCallback(() => {
    setScore(0);
    setErrors(0);
    setQuestionsAnswered(0);
    setCurrentQuestion(null);
    setAnsweredQuestions([]);
    setWrongQuestions([]);
    setShowCongratulations(false);
    setWeaknesses([]);
  }, []);

  const addWeakness = useCallback((category: string) => {
    setWeaknesses((prev) => [...new Set([...prev, category])]);
  }, []);

  const addWrongQuestion = useCallback((question: Question) => {
    setWrongQuestions((prev) => [...prev, question]);
  }, []);

  return (
    <QuizContext.Provider value={{
      score,
      errors,
      questionsAnswered,
      currentQuestion,
      weaknesses,
      answeredQuestions,
      wrongQuestions,
      showCongratulations,
      getNextQuestion,
      incrementScore,
      incrementErrors,
      resetQuiz,
      addWeakness,
      addWrongQuestion
    }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook for using the context
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};