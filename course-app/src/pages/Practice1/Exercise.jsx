import React, { useState } from 'react';

function Exercise({ onNext }) {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [status, setStatus] = useState({ q1: null, q2: null, q3: null, q4: null, q5: null });
  const [feedback, setFeedback] = useState(null);
  const [canProceed, setCanProceed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
    
    if (status[name] !== null) {
      setStatus(prev => ({ ...prev, [name]: null }));
    }
    if (feedback) setFeedback(null);
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
      q5: (q5Val === 'else' || q5Val === 'else if')
    };

    setStatus(newStatus);

    const allCorrect = Object.values(newStatus).every(val => val === true);
    // בודק אם כל השדות הוקלדו (לא ריקים)
    const allAnswered = Object.values(answers).every(val => val.trim() !== '');

    if (allCorrect) {
      setFeedback({ text: 'מצוין! כל התשובות נכונות. החווה של סוזי מנוהלת היטב!', type: 'correct' });
      setCanProceed(true);
      console.log(`Saving to Drive -> Final Exercise Completed. Answers:`, answers);
    } else if (allAnswered) {
      // כל השדות מלאים אבל יש טעויות - נאפשר המשך
      setFeedback({ text: 'לא מדויק. נסו שוב', type: 'incorrect' });
      setCanProceed(true); 
    } else {
      // חסרים שדות
      setFeedback({ text: 'יש למלא טקסט בכל השדות כדי לבדוק ולסיים.', type: 'incorrect' });
      setCanProceed(false);
    }
  };

  const getInputClass = (field) => {
    if (status[field] === true) return 'code-input correct';
    if (status[field] === false) return 'code-input incorrect';
    return 'code-input default';
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    if (onNext) onNext();
  };

  return (
    <div className="section-card">
      <h1>תרגיל מסכם: החווה של סוזי</h1>
      <p>
        עכשיו נחבר את כל מה שלמדנו! עזרו לסוזי לנהל את החווה שלה על ידי השלמת החסר בקטעי הקוד הבאים. 
        עליכם להגדיר משתנים, לחשב את סך כל החיות בחווה, ולבדוק האם החיות רעבות.
      </p>
      
      <div className="code-editor" style={{ margin: '20px 0' }}>
        <span className="code-comment"># 1. Assign cows and horses</span><br />
        <span className="code-var">num_cows</span> <input type="text" name="q1" value={answers.q1} onChange={handleChange} className={getInputClass('q1')} style={{ width: '40px' }} /> <span className="code-num">12</span><br />
        <span className="code-var">num_horses</span> &lt;- <span className="code-num">5</span><br /><br />
        
        <span className="code-comment"># 2. Calculate total animals</span><br />
        <span className="code-var">susie_farm</span> &lt;- <span className="code-var">num_cows</span> <input type="text" name="q2" value={answers.q2} onChange={handleChange} className={getInputClass('q2')} style={{ width: '40px' }} /> <span className="code-var">num_horses</span><br /><br />
        
        <span className="code-comment"># 3. Assign the farm owner's name ("susie")</span><br />
        <span className="code-var">farm_owner</span> &lt;- <input type="text" name="q3" value={answers.q3} onChange={handleChange} className={getInputClass('q3')} style={{ width: '90px' }} placeholder='" "' /><br /><br />
        
        <span className="code-comment"># 4. Did they eat?</span><br />
        <span className="code-var">animals_ate</span> &lt;- <span className="code-bool">FALSE</span><br /><br />
        
        <span className="code-comment"># 5. Check if animals are hungry using a condition</span><br />
        <input type="text" name="q4" value={answers.q4} onChange={handleChange} className={getInputClass('q4')} style={{ width: '50px' }} /> (<span className="code-var">animals_ate</span> == <span className="code-bool">TRUE</span>) {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">animals_hungry</span> &lt;- <span className="code-bool">FALSE</span><br />
        {'}'} <input type="text" name="q5" value={answers.q5} onChange={handleChange} className={getInputClass('q5')} style={{ width: '60px' }} /> {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">animals_hungry</span> &lt;- <span className="code-bool">TRUE</span><br />
        {'}'}<br />
      </div>

      <button className="submit-btn" onClick={checkSusie} style={{ marginTop: '20px' }}>בדוק תשובה</button>
      
      {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}

      <div className="clearfix next-section">
        <button 
          className="next-btn" 
          onClick={() => setShowPopup(true)}
          disabled={!canProceed}
          style={{ float: 'none', marginTop: 0, backgroundColor: canProceed ? '#008080' : '#cccccc', cursor: canProceed ? 'pointer' : 'not-allowed' }}
        >
          סיום שיעור
        </button>
        
        {!canProceed && (
          <span>* יש למלא את כל שדות התרגיל כדי לסיים (לא חייבים לצדוק בהכל)</span>
        )}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="popup-title">כל הכבוד! סיימת את תרגול 1.</h2>
            <p className="popup-text">
              שימו לב לעבור להסבר על התקנת התוכנה על המחשב, לקראת התרגול הבא.
            </p>
            <button 
              className="submit-btn" 
              onClick={handlePopupClose}
              style={{ float: 'none', marginTop: '30px', padding: '12px 30px', fontSize: '18px' }}
            >
              מעולה, נמשיך להתקנה
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Exercise;