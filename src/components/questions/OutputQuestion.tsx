import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import CodeBlock from '../CodeBlock';
import { CheckCircle, XCircle } from 'lucide-react';

interface OutputQuestionProps {
  question: {
    id: string;
    title: string;
    code: string;
    correctOutput: string;
    category: string;
  };
}

const OutputQuestion: React.FC<OutputQuestionProps> = ({ question }) => {
  const [answer, setAnswer] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { incrementScore, incrementErrors, getNextQuestion, addWeakness } = useQuiz();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered) return;
    
    setIsAnswered(true);
    
    // Check if answer is correct (trim whitespace for comparison)
    const correct = answer.trim() === question.correctOutput.trim();
    setIsCorrect(correct);
    
    if (correct) {
      incrementScore();
    } else {
      incrementErrors();
      addWeakness(question.category);
    }
    
    // Move to next question after a delay
    setTimeout(() => {
      getNextQuestion();
      setAnswer('');
      setIsAnswered(false);
    }, 2000);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question.title}</h2>
      
      <CodeBlock code={question.code} className="mb-6" />
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="output" className="block text-slate-300 mb-2">
            Enter the expected output:
          </label>
          <textarea
            id="output"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={isAnswered}
            className="w-full p-3 bg-slate-700 border border-slate-600 rounded-lg font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
            placeholder="Type the expected output here..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isAnswered || !answer.trim()}
          className={`px-6 py-2 rounded-lg font-bold transition-all ${
            isAnswered 
              ? 'bg-slate-600 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
          }`}
        >
          Submit Answer
        </button>
      </form>
      
      {isAnswered && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-900/20 text-green-300' : 'bg-red-900/20 text-red-300'}`}>
          <p className="font-bold flex items-center">
            {isCorrect 
              ? <><CheckCircle className="mr-2\" size={20} /> Correct!</> 
              : <><XCircle className="mr-2" size={20} /> Incorrect!</>}
          </p>
          {!isCorrect && (
            <div className="mt-2">
              <p>The correct output is:</p>
              <pre className="p-3 bg-slate-800 rounded mt-2 font-mono text-green-300 whitespace-pre-wrap">
                {question.correctOutput}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OutputQuestion;