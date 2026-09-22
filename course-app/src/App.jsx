import { useState, useEffect } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Practice1 from './pages/Practice1/Practice1';
import Practice2 from './pages/Practice2/Practice2';
import InstallationGuide from './pages/InstallationGuide';

function App() {
  const [activeTab, setActiveTab] = useState('practice-1');
  const [username, setUsername] = useState('');
  const [startTime, setStartTime] = useState('');

  useEffect(() => {
    // Loop until the user provides a valid, non-empty input
    let user = '';
    while (!user || user.trim() === '') {
      user = window.prompt('יש להזין שם מלא כדי להתחיל:');
    }
    setUsername(user.trim());

  // Generate a unique session start time
    const now = new Date();
    setStartTime(now.toLocaleString('he-IL'));
  }, []);

  // Prevent rendering before login
  if (!username || !startTime) {
    return null; 
  }

  return (
    <div dir="rtl">
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="container">
        {/* Pass both username and startTime to practices */}
        {activeTab === 'practice-1' && <Practice1 username={username} startTime={startTime} />}
        {activeTab === 'practice-2' && <Practice2 username={username} startTime={startTime} />}
        {activeTab === 'install' && <InstallationGuide />}
      </div>
    </div>
  );
}

export default App;