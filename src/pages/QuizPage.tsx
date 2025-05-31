import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import MultipleChoiceQuestion from '../components/questions/MultipleChoiceQuestion';
import OutputQuestion from '../components/questions/OutputQuestion';
import CodeCorrectionQuestion from '../components/questions/CodeCorrectionQuestion';
import ProgressBar from '../components/ProgressBar';

const QuizPage = () => {
  const navigate = useNavigate();
  const { 
    currentQuestion, 
    errors, 
    questionsAnswered,
    getNextQuestion,
    addWeakness
  } = useQuiz();

  useEffect(() => {
    if (errors >= 3) {
      navigate('/');
    }
  }, [errors, navigate]);

  useEffect(() => {
    if (!currentQuestion) {
      getNextQuestion();
    }
  }, [currentQuestion, getNextQuestion]);

  if (!currentQuestion) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case 'multiple-choice':
        return <MultipleChoiceQuestion question={currentQuestion} />;
      case 'output':
        return <OutputQuestion question={currentQuestion} />;
      case 'correction':
        return <CodeCorrectionQuestion question={currentQuestion} />;
      default:
        return <div>Unknown question type</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="text-slate-400">Questões respondidas: </span>
          <span className="font-bold text-white">{questionsAnswered}</span>
        </div>
        <div>
          <span className="text-slate-400">Erros: </span>
          <span className="font-bold text-red-500">{errors}/3</span>
        </div>
      </div>

      <ProgressBar errors={errors} />

      <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700 mb-8">
        {renderQuestion()}
      </div>
    </div>
  );
};

export default QuizPage;