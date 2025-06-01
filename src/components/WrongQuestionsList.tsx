import React from 'react';
import CodeBlock from './CodeBlock';

interface Question {
  id: string;
  type: 'multiple-choice' | 'output' | 'correction';
  title: string;
  category: string;
  options?: string[];
  correctAnswer?: number;
  code?: string;
  correctOutput?: string;
  buggyCode?: string;
  correctCode?: string;
  hint?: string;
}

interface WrongQuestionsListProps {
  questions: Question[];
}

const WrongQuestionsList: React.FC<WrongQuestionsListProps> = ({ questions }) => {
  return (
    <div className="space-y-6">
      {questions.map((question) => (
        <div key={question.id} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h3 className="text-lg font-bold mb-4">{question.title}</h3>
          
          {question.code && (
            <div className="mb-4">
              <CodeBlock code={question.code} />
            </div>
          )}

          {question.type === 'multiple-choice' && question.options && (
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg ${
                    index === question.correctAnswer
                      ? 'bg-green-900/30 border-green-500 text-green-300'
                      : 'bg-slate-700 border-slate-600 text-slate-300'
                  } border`}
                >
                  <div className="flex items-center">
                    <span className="inline-block w-7 h-7 rounded-full mr-3 flex items-center justify-center bg-slate-600 text-white">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-mono">{option}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {question.type === 'output' && question.correctOutput && (
            <div className="mt-4">
              <p className="text-slate-300 mb-2">Saída correta:</p>
              <pre className="p-3 bg-slate-900 rounded-lg font-mono text-green-300">
                {question.correctOutput}
              </pre>
            </div>
          )}

          {question.type === 'correction' && (
            <div className="space-y-4">
              {question.hint && (
                <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                  <p className="text-yellow-300 flex items-start">
                    <span className="mr-2 mt-1">💡</span>
                    <span>{question.hint}</span>
                  </p>
                </div>
              )}
              
              {question.correctCode && (
                <div>
                  <p className="text-slate-300 mb-2">Código correto:</p>
                  <CodeBlock code={question.correctCode} />
                </div>
              )}
            </div>
          )}

          <div className="mt-4 text-sm text-slate-400">
            Categoria: {question.category}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WrongQuestionsList; 