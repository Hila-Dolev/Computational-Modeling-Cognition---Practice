import React, { useState } from 'react';
import OpenQuestion from '../../components/OpenQuestion';

function Intro({ onNext }) {
  const [feedback, setFeedback] = useState(null);

  const checkQ1 = (e) => {
    e.preventDefault();
    if (new FormData(e.target).get('q1') === 'correct') {
      setFeedback({ text: 'נכון מאוד! הבנה של הדרישות היא השלב הראשון לכל פתרון.', type: 'correct' });
    } else {
      setFeedback({ text: 'לא מדויק. נסו שוב.', type: 'incorrect' });
    }
  };

  return (
    <div className="section-card">
      <h2>היכרות ומבוא </h2>
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', borderRight: '4px solid #008080', marginBottom: '20px' }}>
      <p style={{ textAlign: 'center', fontSize: '1.25em', fontWeight: 'bold', color: '#252525', marginBottom: '20px' }}>  היי! </p>        
        <p><strong>מתרגלת הקורס:</strong> הילה דולב אדלר</p>
        <p><strong>מייל ליצירת קשר:</strong> hiladolev.w@gmail.com</p>
        <p><strong>תרגול:</strong> ימי רביעי 16:15-17:45 </p>
        <p><strong>שעת קבלה:</strong> בתיאום מראש</p>
        <a href="/לוז_תרגולים_תשפז.pdf" target="_blank" style={{ color: '#008080', fontWeight: 'bold', textDecoration: 'underline' }}>להורדת לו"ז התרגולים</a>
      </div>

      <h3>"מבט-על" על התרגולים</h3>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img 
          src="/מבט_על.png" 
          alt="מבט-על על נושאי התרגולים" 
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} 
        />
      </div>

      <OpenQuestion
        questionId="intro_q1"
        title="שאלת מבוא"
        text="מה ההיכרות שלכם עם עולמות התכנות והחישוביות?"
        placeholder="ספרו לנו על הרקע שלכם, על מה שאתם יודעים ועל מה שאתם רוצים ללמוד"
         />

         <div className="clearfix">
        <button className="next-btn" onClick={onNext}>המשך</button>
      </div>

      </div>
  );
}

export default Intro;