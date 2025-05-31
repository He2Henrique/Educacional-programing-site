import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { AlertCircle } from 'lucide-react';

const WeaknessReport = () => {
  const { weaknesses } = useQuiz();
  
  // Count occurrences of each weakness
  const counts: Record<string, number> = {};
  weaknesses.forEach(weakness => {
    counts[weakness] = (counts[weakness] || 0) + 1;
  });
  
  // Convert to array for sorting
  const sortedWeaknesses = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3); // Get top 3 weaknesses
  
  if (sortedWeaknesses.length === 0) {
    return null;
  }

  const getRecommendation = (category: string) => {
    switch (category) {
      case 'syntax':
        return 'Revise as regras básicas de sintaxe C e pratique escrevendo programas simples.';
      case 'operators':
        return 'Estude a precedência de operadores e pratique com diferentes combinações.';
      case 'control-flow':
        return 'Foque em declarações if/else, loops e seu comportamento.';
      case 'functions':
        return 'Pratique escrevendo e chamando funções com diferentes tipos de parâmetros.';
      case 'pointers':
        return 'Revise a sintaxe de ponteiros, desreferenciamento e conceitos de memória.';
      case 'arrays':
        return 'Pratique declarações de arrays, inicialização e acesso a elementos.';
      case 'structures':
        return 'Revise a sintaxe de estruturas, acesso a membros e layout de memória.';
      default:
        return 'Pratique mais exercícios nesta categoria.';
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-lg border border-red-900/30">
      <h2 className="text-xl font-bold mb-4 flex items-center text-red-400">
        <AlertCircle className="mr-2" size={24} />
        Áreas para Melhorar
      </h2>
      
      <div className="space-y-4">
        {sortedWeaknesses.map(([category, count]) => (
          <div key={category} className="bg-slate-700 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold capitalize">{category.replace('-', ' ')}</h3>
              <span className="bg-red-900/50 text-red-300 px-2 py-1 rounded text-xs">
                {count} erro{count > 1 ? 's' : ''}
              </span>
            </div>
            <p className="text-slate-300 text-sm">{getRecommendation(category)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeaknessReport;