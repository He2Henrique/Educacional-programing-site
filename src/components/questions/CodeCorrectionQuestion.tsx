import React, { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import CodeEditor from '../CodeEditor';
import { CheckCircle, XCircle } from 'lucide-react';

interface CodeCorrectionQuestionProps {
  question: {
    id: string;
    title: string;
    buggyCode: string;
    correctCode: string;
    hint: string;
    category: string;
  };
}

const CodeCorrectionQuestion: React.FC<CodeCorrectionQuestionProps> = ({ question }) => {
  const [code, setCode] = useState(question.buggyCode);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { incrementScore, incrementErrors, getNextQuestion, addWeakness } = useQuiz();

  const handleSubmit = () => {
    if (isAnswered) return;
    
    setIsAnswered(true);
    
    // Simple normalized comparison (remove whitespace for comparison)
    const normalizedUserCode = code.replace(/\s+/g, '');
    const normalizedCorrectCode = question.correctCode.replace(/\s+/g, '');
    
    const correct = normalizedUserCode === normalizedCorrectCode;
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
      setIsAnswered(false);
    }, 3000);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{question.title}</h2>
      
      <div className="mb-4 p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
        <p className="text-yellow-300 flex items-start">
          <span className="mr-2 mt-1">💡</span>
          <span>{question.hint}</span>
        </p>
      </div>
      
      <div className="mb-6">
        <label className="block text-slate-300 mb-2">
          Corrija o código abaixo:
        </label>
        <CodeEditor 
          value={code}
          onChange={setCode}
          disabled={isAnswered}
        />
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={isAnswered || code === question.buggyCode}
        className={`px-6 py-2 rounded-lg font-bold transition-all ${
          isAnswered || code === question.buggyCode
            ? 'bg-slate-600 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'
        }`}
      >
        Enviar Correção
      </button>
      
      {isAnswered && (
        <div className={`mt-6 p-4 rounded-lg ${isCorrect ? 'bg-green-900/20 text-green-300' : 'bg-red-900/20 text-red-300'}`}>
          <p className="font-bold flex items-center">
            {isCorrect 
              ? <><CheckCircle className="mr-2\" size={20} /> Correto!</> 
              : <><XCircle className="mr-2" size={20} /> Incorreto!</>}
          </p>
          {!isCorrect && (
            <div className="mt-2">
              <p>A solução correta é:</p>
              <CodeEditor 
                value={question.correctCode}
                onChange={() => {}}
                disabled={true}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CodeCorrectionQuestion;