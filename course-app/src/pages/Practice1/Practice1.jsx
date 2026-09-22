import React, { useState } from 'react';
import Intro from './Intro';
import Variables from './Variables';
import Conditions from './Conditions';
import Exercise from './Exercise';
import CompThinking from './CompThinking';

function Practice1({ username, startTime }) {
  const [activeSection, setActiveSection] = useState('intro');

  const renderNavLink = (id, text) => (
    <li>
      <a href="#" 
         className={activeSection === id ? 'active-link' : ''} 
         onClick={(e) => { e.preventDefault(); setActiveSection(id); }}>
         {text}
      </a>
    </li>
  );
  return (
    <div className="container">
      {/* Side nav logic remains */}
      <div className="side-nav">
        <ul>
          {renderNavLink('intro', 'היכרות ומבוא')}
          {renderNavLink('comp-thinking', 'חשיבה תכנותית')}
          {renderNavLink('variables', 'משתנים')}
          {renderNavLink('conditions', 'משפטי תנאי')}
          {renderNavLink('exercise', 'תרגיל')}
        </ul>
      </div>

      <div className="main-content">
        {/* Pass down to all sections */}
        {activeSection === 'intro' && <Intro username={username} startTime={startTime} onNext={() => setActiveSection('comp-thinking')} />}
        {activeSection === 'comp-thinking' && <CompThinking username={username} startTime={startTime} onNext={() => setActiveSection('variables')} />}
        {activeSection === 'variables' && <Variables username={username} startTime={startTime} onNext={() => setActiveSection('conditions')} />}
        {activeSection === 'conditions' && <Conditions username={username} startTime={startTime} onNext={() => setActiveSection('exercise')} />}
        {activeSection === 'exercise' && <Exercise username={username} startTime={startTime} />}
      </div>
    </div>
  );
}

export default Practice1;