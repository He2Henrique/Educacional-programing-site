import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Award } from 'lucide-react';

const ScoreCard = () => {
  const { score, questionsAnswered } = useQuiz();
  
  // Calculate percentage if any questions have been answered
  const percentage = questionsAnswered > 0 
    ? Math.round((score / questionsAnswered) * 100) 
    : 0;
  
  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 hover:border-blue-500 transition-all">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Award className="mr-2 text-yellow-400" size={24} />
        Your Progress
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-700 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-blue-400">{score}</div>
          <div className="text-slate-400 text-sm">Correct Answers</div>
        </div>
        
        <div className="bg-slate-700 p-4 rounded-lg text-center">
          <div className="text-3xl font-bold text-green-400">{percentage}%</div>
          <div className="text-slate-400 text-sm">Success Rate</div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-700">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-slate-400">Total Questions</span>
          <span className="font-bold">{questionsAnswered}</span>
        </div>
        
        {questionsAnswered > 0 && (
          <div className="w-full bg-slate-700 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full" 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScoreCard;