import React, { useState } from 'react';
import OpenQuestion from '../../components/OpenQuestion';
import { saveAnswerToSheet } from '../../utils/apiService';

function Intro({ username, startTime, onNext }) {
  const [answersData, setAnswersData] = useState({ intro_q1: '' });

  const handleAnswer = (id, value) => {
    setAnswersData(prev => ({ ...prev, [id]: value }));
  };

  const handleNextClick = () => {
    const payload = {
      username,
      startTime,
      ...answersData
    };
    saveAnswerToSheet("תרגול 1", payload);
    onNext();
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
        onAnswer={handleAnswer}
      />

      <div className="clearfix" style={{ marginTop: '20px' }}>
        <button className="next-btn" onClick={handleNextClick} style={{ float: 'left' }}>המשך</button>
      </div>
    </div>
  );
}

export default Intro;