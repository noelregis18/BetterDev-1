'use client'

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { Brain, Code2, Wand2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const languages = {
  javascript: { name: 'JavaScript', extension: javascript() },
  jsx: { name: 'JSX', extension: javascript({ jsx: true }) },
  typescript: { name: 'TypeScript', extension: javascript({ typescript: true }) },
  tsx: { name: 'TSX', extension: javascript({ jsx: true, typescript: true }) },
  python: { name: 'Python', extension: python() },
  rust: { name: 'Rust', extension: rust() },
  cpp: { name: 'C++', extension: cpp() },
  java: { name: 'Java', extension: java() },
};

type Language = keyof typeof languages;

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('javascript');
  const [code, setCode] = useState('// Start coding here...');
  const [feedback, setFeedback] = useState(`# AI Feedback

Welcome! I'll analyze your code and provide feedback on:

- Potential bugs and errors
- Code quality issues
- Performance considerations
- Best practices
- Security concerns

Start writing code in the editor and click Analyze to get feedback!`);

  const analyzeMockFeedback = () => {
    if (code.trim() === '') {
      setFeedback('# Waiting for code input...');
      return;
    }

    // This is a mock feedback - in a real app, this would call an AI service
    const mockFeedback = `# Code Analysis

### Potential Issues Found

1. **Code Style**
   - Consider adding proper documentation
   - Add type annotations for better maintainability

### Suggested Improvements

\`\`\`${selectedLanguage}
// Example improved code
function greet(name: string): string {
  return \`Hello, ${name}!\`;
}
\`\`\`

### Best Practices
- Follow the Single Responsibility Principle
- Add error handling for robust code
- Consider edge cases`;

    setFeedback(mockFeedback);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Panel - Code Editor */}
      <div className="w-1/2 border-r border-gray-700 flex flex-col">
        <div className="p-4 bg-purple-900/40 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-semibold">Code Editor</h2>
            </div>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as Language)}
              className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm focus:outline-none "
            >
              {Object.entries(languages).map(([key, { name }]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <CodeMirror
            value={code}
            height="100%"
            theme={vscodeDark}
            extensions={[languages[selectedLanguage].extension]}
            onChange={(value) => setCode(value)}
            className="h-full"
          />
        </div>
        <div className="p-2 flex justify-center items-center bg-purple-900/40 border-t border-gray-700">
          <button
            onClick={analyzeMockFeedback}
            className="h-10 w-[30%] bg-[#7C3AED] hover:bg-[#7C3AED]/80 text-white font-semibold py-2 px-3 rounded-md transition-colors"
          >
            Analyze Code
          </button>
        </div>
      </div>

      {/* Right Panel - AI Feedback */}
      <div className="w-1/2 flex flex-col">
        <div className="p-4 bg-purple-900/40 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-semibold">AI Feedback</h2>
            <Wand2 className="w-5 h-5 text-purple-400" />
          </div>
        </div>
        <div className="flex-1 overflow-auto p-6 bg-purple-950/15">
        <ReactMarkdown
            className="prose prose-invert max-w-none"
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                  //@ts-ignore
                  style={vscDarkPlus as { [key: string]: React.CSSProperties }}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {feedback}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;