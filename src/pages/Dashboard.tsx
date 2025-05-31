import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { Code, BookOpen, AlertTriangle, Trophy } from 'lucide-react';
import ScoreCard from '../components/ScoreCard';
import WeaknessReport from '../components/WeaknessReport';

const Dashboard = () => {
  const { score, resetQuiz, weaknesses } = useQuiz();
  
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Prática de Programação em C
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Aprimore suas habilidades de programação em C através de exercícios interativos. 
          Pratique sintaxe, preveja saídas e corrija códigos para se tornar um melhor programador.
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
            Como Funciona
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Questões selecionadas aleatoriamente do nosso banco de dados</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Após 3 erros, você retornará ao painel</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-2"></span>
              <span>Receba feedback personalizado sobre áreas a melhorar</span>
            </li>
          </ul>
        </div>
      </div>
      
      {weaknesses.length > 0 && (
        <WeaknessReport />
      )}
      
      <div className="mt-8 text-center">
        <Link to="/quiz" 
          onClick={resetQuiz}
          className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-lg text-xl font-bold shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-1">
          <Code className="mr-2" size={24} />
          Iniciar Prática
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