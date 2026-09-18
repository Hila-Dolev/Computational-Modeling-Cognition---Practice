import React, { useState } from 'react';

function Exercise2({ onNext }) {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [status, setStatus] = useState({ q1: null, q2: null, q3: null, q4: null });
  const [feedback, setFeedback] = useState(null);
  const [canProceed, setCanProceed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prev => ({ ...prev, [name]: value }));
    if (status[name] !== null) setStatus(prev => ({ ...prev, [name]: null }));
    if (feedback) setFeedback(null);
  };

  const checkCode = () => {
    let q1Val = answers.q1.trim().toLowerCase();
    let q2Val = answers.q2.trim().toLowerCase();
    let q3Val = answers.q3.trim().toLowerCase();
    let q4Val = answers.q4.trim().toLowerCase();

    const newStatus = {
      q1: (q1Val === 'function'),
      q2: (q2Val === 'return'),
      q3: (q3Val === 'for'),
      q4: (q4Val === 'while')
    };

    setStatus(newStatus);
    const allCorrect = Object.values(newStatus).every(val => val === true);
    const allAnswered = Object.values(answers).every(val => val.trim() !== '');

    if (allCorrect) {
      setFeedback({ text: 'מצוין! הקוד תקין, הפונקציה והלולאות הוגדרו כהלכה.', type: 'correct' });
      setCanProceed(true);
    } else if (allAnswered) {
      setFeedback({ text: 'לא מדויק. רמז: שימו לב לשמות הפקודות ב-R ולאותיות קטנות.', type: 'incorrect' });
      setCanProceed(true); 
    } else {
      setFeedback({ text: 'יש להשלים את כל החסר בקוד.', type: 'incorrect' });
      setCanProceed(false);
    }
  };

  const getInputClass = (field) => {
    if (status[field] === true) return 'code-input correct';
    if (status[field] === false) return 'code-input incorrect';
    return 'code-input default';
  };

  return (
    <div className="section-card">
      <h1>תרגיל: פונקציות ולולאות</h1>
      <p>
        עכשיו ניישם את מה שלמדנו. <br/>
        כתבו פונקציה שבודקת האם זמן התגובה (reaction_time) תקין.
        לאחר מכן, השתמשו בלולאות כדי לעבור על אוסף של זמני תגובה. <br/>השלימו את הפקודות החסרות.
      </p>
      
      <div className="code-editor" style={{ margin: '20px 0' }}>
        <span className="code-comment"># 1. Define check_rt_status</span><br />
        <span className="code-var">check_rt_status</span> &lt;- <input type="text" name="q1" value={answers.q1} onChange={handleChange} className={getInputClass('q1')} style={{ width: '70px' }} />(<span className="code-var">reaction_time</span>) {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">if</span> (<span className="code-var">reaction_time</span> &lt; <span className="code-num">0.5</span>) {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="q2" value={answers.q2} onChange={handleChange} className={getInputClass('q2')} style={{ width: '60px' }} />(<span className="code-bool">"תגובה מהירה מדי"</span>)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'} <span className="code-var">else</span> {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">return</span>(<span className="code-bool">"תגובה תקינה"</span>)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
        {'}'}<br /><br />

        <span className="code-comment"># 2. Loop through times vector</span><br />
        <span className="code-var">times</span> &lt;- c(<span className="code-num">0.4</span>, <span className="code-num">0.7</span>, <span className="code-num">1.2</span>, <span className="code-num">0.3</span>, <span className="code-num">0.8</span>)<br /><br />
        <input type="text" name="q3" value={answers.q3} onChange={handleChange} className={getInputClass('q3')} style={{ width: '40px' }} /> (<span className="code-var">value</span> in <span className="code-var">times</span>) {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">print</span>(<span className="code-var">check_rt_status</span>(<span className="code-var">value</span>))<br />
        {'}'}<br /><br />

        <span className="code-comment"># 3. Dynamic stopping condition</span><br />
        <span className="code-var">limit</span> &lt;- <span className="code-num">0.9</span><br />
        <span className="code-var">attempts</span> &lt;- <span className="code-num">1</span><br />
        <input type="text" name="q4" value={answers.q4} onChange={handleChange} className={getInputClass('q4')} style={{ width: '50px' }} /> (<span className="code-var">limit</span> &gt; <span className="code-num">0.5</span>) {'{'}<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">attempts</span> &lt;- <span className="code-var">attempts</span> + <span className="code-num">1</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-var">limit</span> &lt;- <span className="code-var">limit</span> - <span className="code-num">0.1</span><br />
        {'}'}<br />
      </div>

      <button className="submit-btn" onClick={checkCode} style={{ marginTop: '20px' }}>בדוק תשובה</button>
      {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}

      <div className="clearfix next-section">
        <button className="next-btn" onClick={onNext} disabled={!canProceed} style={{ float: 'none', marginTop: 0, backgroundColor: canProceed ? '#008080' : '#cccccc', cursor: canProceed ? 'pointer' : 'not-allowed' }}>
          המשך
        </button>
      </div>
    </div>
  );
}

export default Exercise2;