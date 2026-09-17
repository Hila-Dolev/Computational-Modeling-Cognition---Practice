import React, { useState } from 'react';

function Conditions({ onNext }) {
  const [showTerminal, setShowTerminal] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const checkFillIn = () => {
    const answer = inputValue.trim().toLowerCase();
    if (answer === 'else if') {
      setFeedback({ text: 'מצוין! תשובה מדויקת.', type: 'correct' });
    } else {
      setFeedback({ text: 'לא מדויק, נסו שוב (רמז: שתי מילים באנגלית).', type: 'incorrect' });
    }
  };

  return (
    <div className="section-card">
      <h2>משפטי תנאי</h2>
      <p>משפטי תנאי מאפשרים לתוכנית לקבל החלטות ולהתפצל בהתאם לצורך. כך נוכל לטפל במצבים שונים בצורות שונות (למשל סיווג ציונים או טיפול בשגיאות).</p>
      <ul>
        <li><code>if</code>: בודק האם התנאי נכון.</li>
        <li><code>else if</code>: בודק תנאי נוסף אם התנאי הקודם לא התקיים.</li>
        <li><code>else</code>: פועל אם אף אחד מהתנאים הקודמים לא התקיים.</li>
      </ul>

      {/* Code and Terminal */}
      <div className="code-container">
        <button className="run-btn" onClick={() => setShowTerminal(!showTerminal)}>
          ▶ Run
        </button>
        <pre style={{ borderRadius: showTerminal ? '5px 5px 0 0' : '5px' }}>
          <code>
{`# Check if variables are equal
num_1 <- 4
num_2 <- 5

if (num_1 == num_2) {
  print("These are equal numbers")
} else {
  print("The numbers are different")
}`}
          </code>
        </pre>
        {showTerminal && (
          <div className="terminal-output" style={{ display: 'block' }}>
            [1] "The numbers are different"
          </div>
        )}
      </div>

      {/* Fill in the blanks question */}
      <div className="question-box">
        <h3>השלם את החסר</h3>
        <p>
          כדי לבדוק תנאי נוסף במקרה שהתנאי הראשון לא התקיים, נשתמש בפקודה:{' '}
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
        </p>
        <button type="button" className="submit-btn" onClick={checkFillIn}>בדוק תשובה</button>
        {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}
      </div>

      <div className="clearfix">
        <button className="next-btn" onClick={onNext}>המשך</button>
      </div>
    </div>
  );
}

export default Conditions;