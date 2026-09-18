import React from 'react';

function TopNav({ activeTab, setActiveTab }) {
  return (
    <div className="top-nav">
      <button 
        className={activeTab === 'practice-1' ? 'active' : ''} 
        onClick={() => setActiveTab('practice-1')}
      >
        תרגול 1
      </button>
      <button 
        className={activeTab === 'practice-2' ? 'active' : ''} 
        onClick={() => setActiveTab('practice-2')}
      >
        תרגול 2
      </button>
      <button 
        className={activeTab === 'install' ? 'active' : ''} 
        onClick={() => setActiveTab('install')}
      >
        התקנת R ו-R Studio
      </button>
    </div>
  );
}

export default TopNav;