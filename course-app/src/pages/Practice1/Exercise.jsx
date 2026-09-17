import React, { useState } from 'react';

function Exercise() {
  // שמירת התשובות של הסטודנט
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  // שמירת מצב התקינות (true=ירוק, false=אדום, null=רגיל)
  const [status, setStatus] = useState({ q1: null, q2: null, q3: null, q4: null, q5: null });
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const checkSusie = () => {
    let q1Val = answers.q1.trim();
    let q2Val = answers.q2.trim();
    let q3Val = answers.q3.trim().replace(/'/g, '"');
    let q4Val = answers.q4.trim().toLowerCase();
    let q5Val = answers.q5.trim().toLowerCase();

    const newStatus = {
      q1: (q1Val === '<-' || q1Val === '='),
      q2: (q2Val === '+'),
      q3: (q3Val === '"susie"' || q3Val === 'susie'),
      q4: (q4Val === 'if'),
      q5: (q5Val === 'else')
    };

    setStatus(newStatus);

    const allCorrect = Object.values(newStatus).every(val => val === true);
    if (allCorrect) {
      setFeedback({ text: 'מצוין! כל התשובות נכונות.', type: 'correct' });
    } else {
      setFeedback({ text: 'ישנן שגיאות, שימו לב לשדות המסומנים באדום ונסו שוב.', type: 'incorrect' });
    }
  };

  // פונקציית עזר להחזרת סגנון התיבה לפי התקינות
  const getInputStyle = (field, width) => ({
    width: width,
    borderColor: status[field] === true ? '#2e7d32' : status[field] === false ? '#c62828' : '#ccc',
    borderWidth: status[field] !== null ? '2px' : '1px'
  });

  return (
    <div className="section-card">
      <h2>תרגיל כיתה: החווה של סוזי</h2>
      <p>עזרו לסוזי לנהל את החווה שלה על ידי השלמת החסר בקטעי הקוד הבאים. עליכם להגדיר משתנים, לחשב את סך כל החיות בחווה, ולבדוק אם החיות רעבות.</p>
      
      <div className="exercise-code" style={{ direction: 'ltr', textAlign: 'left', background: '#2d2d2d', padding: '20px', borderRadius: '8px', color: '#ccc', fontFamily: 'monospace', lineHeight: '2' }}>
        # 1. Assign cows and horses<br />
        num_cows <input type="text" name="q1" value={answers.q1} onChange={handleChange} style={getInputStyle('q1', '30px')} /> 12<br />
        num_horses &lt;- 5<br /><br />
        
        # 2. Calculate total animals<br />
        susie_farm &lt;- num_cows <input type="text" name="q2" value={answers.q2} onChange={handleChange} style={getInputStyle('q2', '30px')} /> num_horses<br /><br />
        
        # 3. Assign the farm owner's name ("susie")<br />
        farm_owner &lt;- <input type="text" name="q3" value={answers.q3} onChange={handleChange} style={getInputStyle('q3', '80px')} /><br /><br />
        
        # 4. Did they eat?<br />
        animals_ate &lt;- FALSE<br /><br />
        
        # 5. Check if animals are hungry using a condition<br />
        <input type="text" name="q4" value={answers.q4} onChange={handleChange} style={getInputStyle('q4', '40px')} /> (animals_ate == TRUE) {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;animals_hungry &lt;- FALSE<br />
        {'}'} <input type="text" name="q5" value={answers.q5} onChange={handleChange} style={getInputStyle('q5', '50px')} /> {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;animals_hungry &lt;- TRUE<br />
        {'}'}<br />
      </div>

      <button className="submit-btn" onClick={checkSusie}>בדוק תשובה</button>
      {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}
    </div>
  );
}

export default Exercise;