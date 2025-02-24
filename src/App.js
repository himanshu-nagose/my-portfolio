import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 mb-6">I am a Web Developer & DevOps Engineer.</p>
      <a
        href="https://github.com/himanshu-nagose"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-500 text-white rounded-2xl shadow hover:bg-blue-600"
      >
        Visit My GitHub
      </a>
    </div>
  );
}

export default App;
