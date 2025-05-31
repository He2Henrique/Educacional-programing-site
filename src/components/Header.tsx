import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';
import { useQuiz } from '../context/QuizContext';

const Header = () => {
  const { score } = useQuiz();

  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Code className="text-blue-400" />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Treinando C.
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">
              Painel
            </Link>
          </div>
          
          <div className="flex items-center gap-2 bg-slate-700 py-1 px-3 rounded-full">
            <span className="text-slate-300">Pontuação:</span>
            <span className="font-bold text-white">{score}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;