import { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Practice1 from './pages/Practice1/Practice1';
import InstallationGuide from './pages/InstallationGuide';

function App() {
  const [activeTab, setActiveTab] = useState('practice-1');

  return (
    <div dir="rtl">
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="container">
        {/* קריאה לרכיבים לפי הטאב הפעיל */}
        {activeTab === 'practice-1' && <Practice1 />}
        {activeTab === 'practice-2' && <h2>כאן נבנה את תרגול 2 (בקרוב)</h2>}
        {activeTab === 'install' && <InstallationGuide />}
      </div>
    </div>
  );
}

export default App;