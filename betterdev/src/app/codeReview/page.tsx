'use client'

import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { go } from '@codemirror/lang-go';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { Brain, Code2, Wand2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from 'axios';
import Loader from '../appComponents/Loader';

const languages = {
  javascript: { name: 'JavaScript', extension: javascript() },
  jsx: { name: 'JSX', extension: javascript({ jsx: true }) },
  typescript: { name: 'TypeScript', extension: javascript({ typescript: true }) },
  tsx: { name: 'TSX', extension: javascript({ jsx: true, typescript: true }) },
  python: { name: 'Python', extension: python() },
  go : { name: "Golang", extension: go() },
  rust: { name: 'Rust', extension: rust() },
  cpp: { name: 'C++', extension: cpp() },
  java: { name: 'Java', extension: java() },
};

type Language = keyof typeof languages;

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('javascript');
  const [code, setCode] = useState('// Start coding here...');
  const [loading, setLoading] = useState<boolean>(false);
  const [feedback, setFeedback] = useState(`# AI Feedback

Welcome! I'll analyze your code and provide feedback on:

- Potential bugs and errors
- Code quality issues
- Performance considerations
- Best practices
- Security concerns

Start writing code in the editor and click Analyze to get feedback!`);

  const getCodeReview = async () => {

    setLoading(true);

    if (code.trim() === '') {
      setFeedback('# Waiting for code input...');
      return;
    }

    try {

      const response = await fetch("http://localhost:3000/api/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ userCode: code }),
      });

      if( !response ){
        throw new Error("response not defined");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch streamed feedback");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");
      let result = "";

      while (true) {
        const { done, value } = await reader!.read();
        if (done) {
          break;
        }
        const chunk = decoder.decode(value, { stream: true });
        result += chunk;

        console.log(chunk);
      }

      setFeedback(result);

      setLoading(false);

    } 
    catch (error) {
      setLoading(false);
      console.error("Error while calling the API: ", error)  
    }

  }

  return (

    <>

    <div className={`flex flex-col h-screen bg-gray-900 text-white sm:flex sm:flex-col sm:h-screen sm:bg-gray-900 sm:text-white  md:flex md:flex-col md:h-screen md:bg-gray-900 md:text-white  lg:flex lg:flex-row lg:h-screen lg:bg-gray-900 lg:text-white ${loading ? 'blur' : '' } `}>
      {/* Left Panel - Code Editor */}
      <div className="
        scrollBarDesign
        w-full border-r smborder-gray-700 flex flex-col
        sm:w-full sm:border-r sm:border-gray-700 sm:flex sm:flex-col
        md:w-full md:border-r md:border-gray-700 md:flex md:flex-col
        lg:w-1/2 lg:border-r lg:border-gray-700 lg:flex lg:flex-col">
        <div className="
          p-4 bg-[#02010a] border-b-2 border-gray-800
          sm:p-4 sm:bg-[#02010a] sm:border-b-2 sm:border-gray-800
          md:p-4 md:bg-[#02010a] md:border-b-2 md:border-gray-800
          lg:p-4 lg:bg-[#02010a] lg:border-b-2 lg:border-gray-800">
          <div className="
            flex items-center justify-between
            sm:flex sm:items-center sm:justify-between
            md:flex md:items-center md:justify-between
            lg:flex lg:items-center lg:justify-between">
            <div className="
              flex items-center space-x-2
              sm:flex sm:items-center sm:space-x-2          
              md:flex md:items-center md:space-x-2            
              lg:flex lg:items-center lg:space-x-2">
              <Code2 className="
                w-5 h-5 text-blue-400
                sm:w-5 sm:h-5 sm:text-blue-400
                md:w-5 md:h-5 md:text-blue-400
                lg:w-5 lg:h-5 lg:text-blue-400" />
              <h2 className="
                text-lg font-semibold
                sm:text-lg sm:font-semibold
                md:text-lg md:font-semibold
                lg:text-lg lg:font-semibold">Code Editor</h2>
            </div>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as Language)}
              className="
              bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm focus:outline-none
              sm:bg-gray-700 sm:border sm:border-gray-600 sm:rounded sm:px-3 sm:py-1 sm:text-sm sm:focus:outline-none
              md:bg-gray-700 md:border md:border-gray-600 md:rounded md:px-3 md:py-1 md:text-sm md:focus:outline-none
              lg:bg-gray-700 lg:border lg:border-gray-600 lg:rounded lg:px-3 lg:py-1 lg:text-sm lg:focus:outline-none "
            >
              {Object.entries(languages).map(([key, { name }]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="
          flex-1 overflow-auto
          sm:flex-1 sm:overflow-auto
          md:flex-1 md:overflow-auto
          lg:flex-1 lg:overflow-auto">
          <CodeMirror
            value={code}
            height="100%"
            theme={vscodeDark}
            extensions={[languages[selectedLanguage].extension]}
            onChange={(value) => setCode(value)}
            className="md:h-full lg:h-full code-editor"
          />
        </div>
        <div className="
          p-2 flex justify-center items-center bg-[#02010a] border-t border-gray-700
          sm:p-2 sm:flex sm:justify-center sm:items-center sm:bg-[#02010a] sm:border-t sm:border-gray-700
          md:p-2 md:flex md:justify-center md:items-center md:bg-[#02010a] md:border-t md:border-gray-700
          lg:p-2 lg:flex lg:justify-center lg:items-center lg:bg-[#02010a] lg:border-t lg:border-gray-700">
          <button
            onClick={getCodeReview}
            className="
            h-8 w-[40%] text-xs bg-[#7C3AED]/60 hover:bg-[#7C3AED]/80 text-white font-semibold py-1 px-3 rounded-sm transition-colors
            sm:h-10 sm:w-[30%] sm:text-base sm:bg-[#7C3AED]/60 sm:hover:bg-[#7C3AED]/80 sm:text-white sm:font-semibold sm:py-2 sm:px-3 sm:rounded-md sm:transition-colors
            md:h-10 md:w-[30%] md:bg-[#7C3AED]/60 md:hover:bg-[#7C3AED]/80 md:text-white md:font-semibold md:py-2 md:px-3 md:rounded-md md:transition-colors
            lg:h-10 lg:w-[30%] lg:bg-[#7C3AED]/60 lg:hover:bg-[#7C3AED]/80 lg:text-white lg:font-semibold lg:py-2 lg:px-3 lg:rounded-md lg:transition-colors"
          >
            Analyze Code
          </button>
        </div>
      </div>

      {/* Right Panel - AI Feedback */}
      <div className="
        scrollBarDesign
        w-full flex flex-col
        sm:w-full sm:flex sm:flex-col
        md:w-full md:flex md:flex-col
        lg:w-1/2 lg:flex lg:flex-col">
        <div className="
          p-4 bg-[#02010a] border-b-2 border-gray-800
          sm:p-4 sm:bg-[#02010a] sm:border-b-2 sm:border-gray-800
          md:p-4 md:bg-[#02010a] md:border-b-2 md:border-gray-800
          lg:p-4 lg:bg-[#02010a] lg:border-b-2 lg:border-gray-800">
          <div className="
            flex items-center space-x-2
            sm:flex sm:items-center sm:space-x-2
            md:flex md:items-center md:space-x-2
            lg:flex lg:items-center lg:space-x-2">
            <Brain className="
              w-5 h-5 text-purple-400
              sm:w-5 sm:h-5 sm:text-purple-400
              md:w-5 md:h-5 md:text-purple-400
              lg:w-5 lg:h-5 lg:text-purple-400" />
            <h2 className="
              text-lg font-semibold
              sm:text-lg sm:font-semibold
              md:text-lg md:font-semibold
              lg:text-lg lg:font-semibold">Feedback</h2>
            {/* <Wand2 className="w-5 h-5 text-purple-400" /> */}
          </div>
        </div>
        <div className="
          p-4 flex-1 overflow-y-auto bg-[#02010a]
          sm:p-4 sm:flex-1 sm:overflow-y-auto sm:bg-[#02010a]
          md:p-4 md:flex-1 md:overflow-y-auto md:bg-[#02010a]
          lg:p-4 lg:flex-1 lg:overflow-y-auto lg:bg-[#02010a] " id='reviewDiv'>
        <ReactMarkdown
            className="
              text-sm prose prose-invert max-w-none    
              sm:text-base sm:prose sm:prose-invert sm:max-w-none  
              md:prose md:prose-invert md:max-w-none  
              lg:prose lg:prose-invert lg:max-w-none"
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

    { loading && <Loader /> }

    </>
  );
}

export default App;