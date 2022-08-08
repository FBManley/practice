import React, { useState } from 'react';
import './App.css';
import Header from './element/Header'
import MessageList from './element/MessageList'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  

  return (
    <div className="App">
      <main className={isDarkMode ? "dark-mode" : ""}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode}/>
      <MessageList />
     </main>
    </div>
  );
}

export default App;
