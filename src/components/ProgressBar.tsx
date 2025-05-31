import React from 'react';

interface ProgressBarProps {
  errors: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ errors }) => {
  const maxErrors = 3;
  const remainingAttempts = maxErrors - errors;
  const percentage = (remainingAttempts / maxErrors) * 100;
  
  return (
    <div className="mb-6">
      <div className="w-full bg-slate-700 rounded-full h-4 mb-2">
        <div 
          className={`h-4 rounded-full transition-all duration-500 ${
            percentage > 66 ? 'bg-green-500' : 
            percentage > 33 ? 'bg-yellow-500' : 
            'bg-red-500'
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-sm text-slate-400 text-right">
        {remainingAttempts} tentativa{remainingAttempts !== 1 ? 's' : ''} restante{remainingAttempts !== 1 ? 's' : ''}
      </div>
    </div>
  );
};

export default ProgressBar;