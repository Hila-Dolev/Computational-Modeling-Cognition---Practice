import React, { useState } from 'react';
import DragDropQuiz from '../../components/DragDropQuiz';
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion';
import AlgoSimulation from '../../components/AlgoSimulation';

function CompThinking({ onNext }) {
  // State to track if each question currently has a valid answer
  const [answersStatus, setAnswersStatus] = useState({
    CompThinking_q1: false,
    CompThinking_dragdrop: false
  });

  // Dynamically update the status of a specific question
  const handleStatusChange = (id, hasAnswer) => {
    setAnswersStatus(prev => ({
      ...prev,
      [id]: hasAnswer
    }));
  };

  // Check if all tracked questions are currently answered
  const canProceed = Object.values(answersStatus).every(Boolean);

  return (
    <div className="section-card">
      <h1>חשיבה תכנותית</h1>
      <p>לפני שנתחיל לכתוב קוד, עלינו להבין איך מחשבים "חושבים".<br/> צפו בסרטון הבא:</p>
      
      <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/FN2RM-CHkuI" 
            title="PB&Jam - Exact Instructions Challenge" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      {/* Passing the dynamic status handler */}
      <MultipleChoiceQuestion 
        id="CompThinking_q1"
        title="מדוע הילדים התקשו לגרום לאבא שלהם להכין סנדוויץ' בצורה נכונה?"
        options={[
          { label: 'כי הוא לא ידע מה זה חמאת בוטנים.', value: 'didnt_know_pb', isCorrect: false },
          { label: 'כי ההוראות שלהם לא היו ספציפיות מספיק.', value: 'not_specific_enough', isCorrect: true },
          { label: 'כי הכלים היו חסרים.', value: 'missing_tools', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <h2>איך ניגשים לבעיה חישובית?</h2>
      <ul>
        <li><strong>נגדיר את הבעיה:</strong> מה הקלטים והפלטים שלנו? אילו מגבלות יש?</li>
        <li><strong>נפרק אותה לבעיות קטנות (הפרד ומשול):</strong> פירוק הבעיה המורכבת לתת-בעיות קטנות.</li>
        <li><strong>נבחר את הכלים המתאימים:</strong> מבני נתונים ואלגוריתמים.</li>
        <li><strong>מימוש ובדיקה:</strong> כתיבה ובדיקה.</li>
      </ul>

      <AlgoSimulation />
      
      <h2>מושגי יסוד בתכנות</h2>
      <ul>
        <li><strong>קלט/פלט:</strong> המידע שאנחנו מקבלים (קלט) והמידע שאנחנו מציגים בסוף (פלט). למשל, ההזמנה במסעדה שאנחנו עורכים היא הקלט, והאוכל עצמו שנקבל הוא הפלט.</li>
        <li><strong>משתנים:</strong> שמירת ערכים לעבודה.</li>
        <li><strong>משפטי תנאי:</strong> קבלת החלטות ופיצול עץ התוכנה.</li>
        <li><strong>לולאות:</strong> ביצוע פעולות חוזרות.</li>
        <li><strong>תיעוד (הערות):</strong> הסברים בקוד שעוזרים להבין מה התכוונו.</li>
      </ul>

      {/* Adding an ID and passing the dynamic status handler */}
      <DragDropQuiz 
        id="CompThinking_dragdrop"
        wordBank={['משתנים', 'תנאי', 'קלט', 'לולאות', 'הערות']}
        sentences={[
          ['המידע שהתוכנה מקבלת מהמשתמש נקרא', '.'],
          ['כאשר נרצה לשמור ערך בזיכרון, נשתמש ב-', '.'],
          ['כדי לבצע קבלת החלטות נשתמש במשפטי', '.'],
          ['אם נרצה לבצע פעולה 100 פעמים ברצף, נשתמש ב-', '.'],
          ['כדי להסביר לקורא אחר מה הקוד שלנו עושה, נכתוב', '.']
        ]}
        correctAnswers={['קלט', 'משתנים', 'תנאי', 'לולאות', 'הערות']}
        onStatusChange={handleStatusChange}
      />

      {/* Next button area - button aligned to the left, warning text below it */}
      <div className="clearfix" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
        <button 
          className="next-btn" 
          onClick={onNext}
          disabled={!canProceed}
          style={{ 
            float: 'none', 
            marginTop: 0, 
            backgroundColor: canProceed ? '#008080' : '#cccccc',
            cursor: canProceed ? 'pointer' : 'not-allowed'
          }}
        >
          המשך
        </button>
        
        {!canProceed && (
          <span style={{ color: '#888', fontSize: '0.8em' }}>
            * יש לענות על כל שאלות התרגול כדי להמשיך
          </span>
        )}
      </div>
    </div>
  );
}

export default CompThinking;