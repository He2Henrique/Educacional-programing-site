import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import CodeBlock from '../CodeBlock';
import { CheckCircle, XCircle } from 'lucide-react';

interface MultipleChoiceQuestionProps {
  question: {
    id: string;
    title: string;
    code?: string;
    options: string[];
    correctAnswer: number;
    category: string;
  };
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ question }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { incrementScore, incrementErrors, getNextQuestion, addWeakness, addWrongQuestion } = useQuiz();

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);
    
    const correct = index === question.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      incrementScore();
    } else {
      incrementErrors();
      addWeakness(question.category);
      addWrongQuestion({ ...question, type: 'multiple-choice' });
    }
    
    // Move to next question after a delay
    setTimeout(() => {
      getNextQuestion();
      setSelectedOption(null);
      setIsAnswered(false);
    }, 2000);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question.title}</h2>
      
      {question.code && <CodeBlock code={question.code} className="mb-6" />}
      
      <div className="space-y-3 mt-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(index)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg transition-all flex justify-between items-center ${
              isAnswered 
                ? index === question.correctAnswer
                  ? 'bg-green-900/30 border-green-500 text-green-300'
                  : index === selectedOption
                    ? 'bg-red-900/30 border-red-500 text-red-300'
                    : 'bg-slate-700 border-slate-600 text-slate-300'
                : 'bg-slate-700 hover:bg-slate-600 border-slate-600 text-white'
            } border`}
          >
            <div className="flex items-center">
              <span className={`inline-block w-7 h-7 rounded-full mr-3 flex items-center justify-center ${
                isAnswered 
                  ? index === question.correctAnswer
                    ? 'bg-green-500 text-white'
                    : index === selectedOption
                      ? 'bg-red-500 text-white'
                      : 'bg-slate-600 text-white'
                  : 'bg-slate-600 text-white'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="font-mono">{option}</span>
            </div>
            
            {isAnswered && (
              index === question.correctAnswer ? (
                <CheckCircle className="text-green-500" size={20} />
              ) : index === selectedOption && index !== question.correctAnswer ? (
                <XCircle className="text-red-500" size={20} />
              ) : null
            )}
          </button>
        ))}
      </div>
      
      {isAnswered && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-900/20 text-green-300' : 'bg-red-900/20 text-red-300'}`}>
          <p className="font-bold flex items-center">
            {isCorrect 
              ? <><CheckCircle className="mr-2\" size={20} /> Correto!</> 
              : <><XCircle className="mr-2" size={20} /> Incorreto!</>}
          </p>
          {!isCorrect && (
            <p className="mt-2">A resposta correta é a opção {String.fromCharCode(65 + question.correctAnswer)}.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;