import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import CodeBlock from '../CodeBlock';
import { CheckCircle, XCircle } from 'lucide-react';

interface CorrectionQuestionProps {
  question: {
    id: string;
    title: string;
    code: string;
    correctCode: string;
    hint: string;
    category: string;
  };
}

const CorrectionQuestion: React.FC<CorrectionQuestionProps> = ({ question }) => {
  const [userCode, setUserCode] = useState(question.code);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const { incrementScore, incrementErrors, getNextQuestion, addWeakness, addWrongQuestion } = useQuiz();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered) return;

    const normalizedUserCode = userCode.trim().toLowerCase();
    const normalizedCorrectCode = question.correctCode.trim().toLowerCase();
    
    const correct = normalizedUserCode === normalizedCorrectCode;
    setIsCorrect(correct);
    setIsAnswered(true);
    
    if (correct) {
      incrementScore();
    } else {
      incrementErrors();
      addWeakness(question.category);
      addWrongQuestion({ ...question, type: 'correction' });
    }
    
    // Move to next question after a delay
    setTimeout(() => {
      getNextQuestion();
      setUserCode(question.code);
      setIsAnswered(false);
      setShowHint(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-white">{question.title}</h2>
      
      <div className="bg-slate-800 p-4 rounded-lg">
        <CodeBlock code={question.code} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="code" className="block text-sm font-medium text-slate-300 mb-2">
            Corrija o código:
          </label>
          <textarea
            id="code"
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            disabled={isAnswered}
            className="w-full h-48 p-3 bg-slate-700 border border-slate-600 rounded-lg font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {!isCorrect && !showHint && (
          <button
            type="button"
            onClick={() => setShowHint(true)}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Mostrar dica
          </button>
        )}

        {showHint && (
          <div className="p-4 bg-slate-700 rounded-lg text-slate-300">
            <p className="font-medium mb-2">Dica:</p>
            <p>{question.hint}</p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isAnswered}
            className={`px-6 py-2 rounded-lg font-bold transition-all ${
              isAnswered 
                ? isCorrect 
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-red-500 text-white cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isAnswered ? (
              isCorrect ? (
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Correto!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Incorreto
                </span>
              )
            ) : (
              'Verificar'
            )}
          </button>

          {isAnswered && !isCorrect && (
            <div className="text-slate-300">
              <p className="font-medium mb-2">Código correto:</p>
              <CodeBlock code={question.correctCode} />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CorrectionQuestion; 