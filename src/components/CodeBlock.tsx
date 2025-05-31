import React from 'react';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  code: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, className = '' }) => {
  // Highlight the code using Prism
  const html = highlight(code, languages.c, 'c');

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="bg-slate-700 px-4 py-2 text-xs text-slate-400 flex items-center">
        <span className="flex mr-2">
          <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <span>main.c</span>
      </div>
      <pre className="p-4 bg-slate-800 text-slate-200 overflow-x-auto font-mono text-sm">
        <code dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
};

export default CodeBlock;