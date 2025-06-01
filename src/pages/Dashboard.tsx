import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { Code, BookOpen, AlertTriangle, Trophy, CheckCircle } from 'lucide-react';
import ScoreCard from '../components/ScoreCard';
import WeaknessReport from '../components/WeaknessReport';
import WrongQuestionsList from '../components/WrongQuestionsList';

const Dashboard = () => {
  const { score, resetQuiz, weaknesses, wrongQuestions, showCongratulations } = useQuiz();
  
  return (
    <div className="flex flex-col gap-8">
      {showCongratulations && (
        <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="text-yellow-400" size={48} />
          </div>
          <h2 className="text-2xl font-bold text-green-300 mb-2">
            Parabéns! Nota máxima!
          </h2>
          <p className="text-green-200 text-lg">
            Você participou da campanha e deixou seu professor feliz! 🎉
          </p>
        </div>
      )}

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Prática de Programação em C
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Aprimore suas habilidades de programação em C através de exercícios interativos. 
          Faça parte da campanha faça seu professor feliz e acerte todas!
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScoreCard />
        
        <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 hover:border-blue-500 transition-all">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <BookOpen className="mr-2 text-blue-400" size={24} />
            Tipos de Exercícios
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Questões de múltipla escolha (5 opções)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Desafios de previsão de saída de programas</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Exercícios de correção de sintaxe de código</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 hover:border-blue-500 transition-all">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <AlertTriangle className="mr-2 text-yellow-400" size={24} />
            Regras
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-yellow-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Você tem 3 chances de errar</span>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Questões não se repetem até acertar todas</span>
            </li>
            <li className="flex items-start">
              <span className="bg-yellow-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Questões erradas aparecem no painel</span>
            </li>
          </ul>
        </div>
      </div>

      {wrongQuestions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <AlertTriangle className="mr-2 text-yellow-400" size={24} />
            Questões que você errou
          </h2>
          <WrongQuestionsList questions={wrongQuestions} />
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Link
          to="/quiz"
          onClick={resetQuiz}
          className="px-8 py-3 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg font-bold transition-colors flex items-center gap-2"
        >
          <Code size={20} />
          Iniciar Quiz
        </Link>
      </div>
      
      <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-slate-700 mt-8">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          <Trophy className="mr-2 text-yellow-400" size={24} />
          Dicas de Aprendizado
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Foque nas Áreas Fracas</h3>
            <p className="text-slate-300">Revise o feedback após cada sessão para entender quais áreas precisam de mais prática.</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Pratique Regularmente</h3>
            <p className="text-slate-300">Consistência é a chave. Tente praticar diariamente para obter os melhores resultados.</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Leia o Código com Atenção</h3>
            <p className="text-slate-300">Muitos erros vêm da má leitura do código. Tome seu tempo para entender cada linha.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;