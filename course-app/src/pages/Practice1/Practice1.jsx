import React, { useState } from 'react';
import Intro from './Intro';
import Variables from './Variables';
import Conditions from './Conditions';
import Exercise from './Exercise';
import CompThinking from './CompThinking';

function Practice1() {
  const [activeSection, setActiveSection] = useState('intro');

  // פונקציית עזר ליצירת קישורי הניווט בסרגל הצד
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
    <div style={{ display: 'flex', width: '100%' }}>
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
        {activeSection === 'intro' && <Intro onNext={() => setActiveSection('comp-thinking')} />}
        {activeSection === 'comp-thinking' && <CompThinking onNext={() => setActiveSection('variables')} />}
        {activeSection === 'variables' && <Variables onNext={() => setActiveSection('conditions')} />}
        {activeSection === 'conditions' && <Conditions onNext={() => setActiveSection('exercise')} />}
        {activeSection === 'exercise' && <Exercise />}
      </div>
    </div>
  );
}

export default Practice1;