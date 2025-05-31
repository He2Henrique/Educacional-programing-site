import React from 'react';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, disabled = false }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="bg-slate-700 px-4 py-2 text-xs text-slate-400 flex items-center">
        <span className="flex mr-2">
          <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </span>
        <span>editor.c</span>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full p-4 bg-slate-800 text-slate-200 font-mono text-sm min-h-[200px] focus:outline-none ${
          disabled ? 'opacity-70 cursor-not-allowed' : ''
        }`}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;