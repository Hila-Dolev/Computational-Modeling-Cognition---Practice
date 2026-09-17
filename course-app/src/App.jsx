import { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import Practice1 from './pages/Practice1/Practice1';

function App() {
  const [activeTab, setActiveTab] = useState('practice-1');

  return (
    <div dir="rtl">
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="container">
        {/* קריאה לרכיב המלא של תרגול 1 */}
        {activeTab === 'practice-1' && <Practice1 />}
        
        {/* אלו עדיין כותרות זמניות, נעדכן אותן בהמשך */}
        <div className="main-content">
          {activeTab === 'practice-2' && <h2>כאן נבנה את תרגול 2 (בקרוב)</h2>}
          {activeTab === 'install' && <h2>כאן נבנה את מדריך ההתקנה</h2>}
        </div>
      </div>
    </div>
  );
}

export default App;