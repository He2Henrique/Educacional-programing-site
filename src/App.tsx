import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import QuizPage from './pages/QuizPage';
import { QuizProvider } from './context/QuizContext';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <div className="min-h-screen bg-slate-900 text-white flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/quiz" element={<QuizPage />} />
            </Routes>
          </main>
          <footer className="bg-slate-800 py-4 text-center text-slate-400">
            <p>© 2025 Prática de Programação em C | Aprenda lógica de programação em C</p>
          </footer>
        </div>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;