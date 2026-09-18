import React, { useState } from 'react';
import Loops from './Loops';
import Functions from './Functions';
import Exercise2 from './Exercise2';
import DataStructures from './DataStructures';
import Dplyr from './Dplyr';

function Practice2() {
  const [activeSection, setActiveSection] = useState('loops');

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
          {renderNavLink('loops', 'לולאות')}
          {renderNavLink('functions', 'פונקציות')}
          {renderNavLink('exercise', 'תרגיל')}
          {renderNavLink('data-structures', 'מבני נתונים')}
          {renderNavLink('dplyr', 'ספריית dplyr')}
        </ul>
      </div>

      <div className="main-content">
        {activeSection === 'loops' && <Loops onNext={() => setActiveSection('functions')} />}
        {activeSection === 'functions' && <Functions onNext={() => setActiveSection('exercise')} />}
        {activeSection === 'exercise' && <Exercise2 onNext={() => setActiveSection('data-structures')} />}
        {activeSection === 'data-structures' && <DataStructures onNext={() => setActiveSection('dplyr')} />}
        {activeSection === 'dplyr' && <Dplyr />}
      </div>
    </div>
  );
}

export default Practice2;