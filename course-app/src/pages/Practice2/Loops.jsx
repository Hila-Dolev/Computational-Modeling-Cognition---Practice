import React, { useState } from 'react';
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion';
import DragDropQuiz from '../../components/DragDropQuiz';

function Loops({ onNext }) {
  const [showTerminalFor, setShowTerminalFor] = useState(false);
  const [showTerminalWhile, setShowTerminalWhile] = useState(false);

 // States for visual animations
  const [activeForIndex, setActiveForIndex] = useState(null);
  const [currentSum, setCurrentSum] = useState(0);
  const [whileLimit, setWhileLimit] = useState(0.9);
  
  const [answeredQuestions, setAnsweredQuestions] = useState({
    loops_q1_bg: false,
    loops_q2_for: false,
    loops_q3_while: false,
    loops_q4_dragdrop: false
  });

  const handleStatusChange = (id, hasAnswer) => {
    setAnsweredQuestions(prev => ({ ...prev, [id]: hasAnswer }));
  };

  const canProceed = Object.values(answeredQuestions).every(Boolean);

  
  const runForSimulation = () => {
    const scores = [85, 92, 78];
    // Reset before starting
    setCurrentSum(0);
    setActiveForIndex(null);

    scores.forEach((score, idx) => {
      setTimeout(() => {
        setActiveForIndex(idx);
        setCurrentSum(prev => prev + score);
      }, (idx + 1) * 1200); // 1.2s delay for each step
    });

    // Reset active index highlight at the end
    setTimeout(() => {
      setActiveForIndex(null);
    }, (scores.length + 1) * 1200);
  };

  const runWhileSimulation = () => {
    let currentLimit = 0.9;
    setWhileLimit(currentLimit);
    
    const interval = setInterval(() => {
      currentLimit -= 0.2;
      setWhileLimit(parseFloat(currentLimit.toFixed(1)));
      if (currentLimit <= 0.5) {
        clearInterval(interval);
      }
    }, 1200);
  };

  return (
    <div className="section-card">
      <h1>לולאות (Loops)</h1>
      
      <h2>למה אנחנו צריכים לולאות?</h2>
      <p>
        נניח שאנחנו רוצים להדפיס למסך הודעה 5 פעמים. נוכל פשוט לכתוב את הפקודה <code>print</code> חמש פעמים ברצף. 
        אבל מה יקרה אם נרצה לעבור על נתונים של 1,000 נבדקים בניסוי קוגניטיבי ולחשב לכל אחד מהם ממוצע? כתיבה ידנית תהיה ארוכה, מסורבלת ומועדת לטעויות.
      </p>
      <p>
        <strong>לולאה (Loop)</strong> היא מבנה בקוד שמאפשר לנו לקחת בלוק של פקודות, ולהורות למחשב לבצע אותו שוב ושוב באופן אוטומטי, עד שמתקיים תנאי מסוים שאומר לו להפסיק.
      </p>
      
      <div className="comparison-container">
        <div className="comparison-box">
          <h4>הדרך הישירה (ללא לולאה)</h4>
          <code className="code-line error">print("Participant 1")</code>
          <code className="code-line error">print("Participant 2")</code>
          <code className="code-line error">print("Participant 3")</code>
          <code className="code-line error">...</code>
        </div>
        <div className="comparison-box">
          <h4>הדרך היעילה (עם לולאה)</h4>
            <p className="code-line success"><strong>print("Participant i")</strong><br/>i הוא מספר האיטרציה הנוכחית</p>
        </div>
      </div>

      <MultipleChoiceQuestion 
        id="loops_q1_bg"
        title="1. מהי הסיבה המרכזית לשימוש בלולאות בקוד?"
        options={[
          { label: 'כדי למנוע חזרתיות בקוד (העתק-הדבק) ולבצע אוטומציה של תהליכים.', value: 'automation', isCorrect: true },
          { label: 'כדי לגרום לקוד לרוץ לאט יותר ובכך למנוע עומס על המחשב.', value: 'slowdown', isCorrect: false },
          { label: 'כדי לשמור משתנים בזיכרון של התוכנה לטווח ארוך.', value: 'memory', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <hr className="section-divider" />

      <h2>לולאת for</h2>
      <p>
        נשתמש בלולאת <code>for</code> כאשר אנחנו <strong>יודעים מראש</strong> כמה פעמים נרצה שהלולאה תרוץ. 
        בדרך כלל נשתמש בה כדי לעבור על אוסף של נתונים קיים (כמו וקטור של זמני תגובה), איבר אחר איבר, מההתחלה ועד הסוף.
      </p>

      <div className="question-box center">
        <h4>הדגמה: מעבר על וקטור ציונים וחישוב סכום</h4>
        
        <div className="sim-elements">
          {[85, 92, 78].map((score, index) => (
            <div key={index} className={`sim-node ${activeForIndex === index ? 'active' : ''}`}>
              {score}
            </div>
          ))}
        </div>

        <div className="sum-sim-container">
          <div className="sum-box">
            <span className="sum-label">total_sum</span>
            <span className="sum-value">{currentSum}</span>
          </div>
          <div className="sum-action-text">
            {activeForIndex !== null ? (
              <span>מוסיף <strong>{[85, 92, 78][activeForIndex]}</strong> למשתנה הסכום</span>
            ) : currentSum > 0 ? (
              <span className="success-text">הלולאה הסתיימה בהצלחה!</span>
            ) : (
              <span></span>
            )}
          </div>
        </div>

        <button className="submit-btn center-btn" onClick={runForSimulation} disabled={activeForIndex !== null}>
          הפעל לולאה
        </button>
      </div>

      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalFor(!showTerminalFor)}>▶ Run</button>
        <pre className={showTerminalFor ? 'terminal-open' : ''}>
          <code>
{`# Define a vector of scores
scores <- c(85, 92, 78)

# Initialize the sum variable
total_sum <- 0

# Loop over each score and add it to total_sum
for (val in scores) {
  total_sum <- total_sum + val
  print(paste("Current sum is:", total_sum))
}`}
          </code>
        </pre>
        {showTerminalFor && (
          <div className="terminal-output">
            [1] "Current sum is: 85"<br/>
            [1] "Current sum is: 177"<br/>
            [1] "Current sum is: 255"
          </div>
        )}
      </div>
      
      <MultipleChoiceQuestion 
        id="loops_q2_for"
        title="2. באיזה מצב מבין הבאים הכי מתאים להשתמש בלולאת for?"
        options={[
          { label: 'כאשר נרצה לחזור על פעולה עד שהמשתמש יקליד את המילה "stop".', value: 'dynamic', isCorrect: false },
          { label: 'כאשר נרצה לעבור על רשימה של 30 נבדקים ולחשב לכל אחד מהם ציון תקן.', value: 'fixed', isCorrect: true },
          { label: 'כאשר אנחנו רוצים שהקוד ירוץ לנצח בלי הפסקה.', value: 'infinite', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <hr className="section-divider" />

      <h2>לולאת while</h2>
      <p>
        נשתמש בלולאת <code>while</code> כאשר יש לנו <strong>תנאי עצירה</strong>, ואנחנו רוצים שהלולאה תמשיך לרוץ <em>כל עוד</em> התנאי הזה מתקיים. 
        לא תמיד נדע מראש כמה פעמים היא תרוץ! חשוב מאוד לזכור לעדכן את המשתנים בתוך הלולאה, אחרת התנאי לעולם לא ישתנה ונקבל "לולאה אין-סופית" שתתקע את התוכנה.
      </p>

      <div className="question-box center">
        <h4>הדגמה: ריצה כל עוד התנאי מתקיים</h4>
        <div className="while-sim-container">
          <div className={`while-condition ${whileLimit > 0.5 ? 'true' : 'false'}`}>
            תנאי: Limit &gt; 0.5<br/>
            <span>
              {whileLimit > 0.5 ? 'מתקיים (TRUE)' : 'לא מתקיים (FALSE) -> עצור!'}
            </span>
          </div>
          <div className="while-limit-display">
            Limit = {whileLimit.toFixed(1)}
          </div>
        </div>
        <button className="submit-btn center-btn" onClick={runWhileSimulation}>הפעל לולאה</button>
      </div>

      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalWhile(!showTerminalWhile)}>▶ Run</button>
        <pre className={showTerminalWhile ? 'terminal-open' : ''}>
          <code>
{`# Initialize variable
limit <- 0.9
attempts <- 1

# Loop as long as limit is greater than 0.5
while (limit > 0.5) {
  print(paste("Attempt:", attempts, "| Limit:", limit))
  
  # Update variables to avoid an infinite loop
  attempts <- attempts + 1
  limit <- limit - 0.2
}`}
          </code>
        </pre>
        {showTerminalWhile && (
          <div className="terminal-output">
            [1] "Attempt: 1 | Limit: 0.9"<br/>
            [1] "Attempt: 2 | Limit: 0.7"<br/>
          </div>
        )}
      </div>

      <MultipleChoiceQuestion 
        id="loops_q3_while"
        title="3. מה עלול לקרות אם נכתוב לולאת while אבל נשכח לעדכן את המשתנים בתוכה?"
        options={[
          { label: 'הלולאה תהפוך ל"לולאה אין-סופית" (Infinite loop) והתוכנה תיתקע.', value: 'infinite_loop', isCorrect: true },
          { label: 'הלולאה פשוט תרוץ פעם אחת ותעצור אוטומטית.', value: 'stop_once', isCorrect: false },
          { label: 'המערכת תמיר את הלולאה באופן אוטומטי ללולאת for.', value: 'auto_convert', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <hr className="section-divider" />

      <h2>בחנו את עצמכם - סיכום לולאות</h2>
      <DragDropQuiz 
        id="loops_q4_dragdrop"
        wordBank={['for', 'while', 'תנאי עצירה', 'אין-סופית', 'וקטור']}
        sentences={[
          ['לולאה מסוג', 'מתאימה כאשר אנחנו יודעים מראש כמה פעמים נרצה לבצע את הקוד.'],
          ['לולאה מסוג', 'תמשיך לרוץ כל עוד התנאי שניתן לה מתקיים.'],
          ['לולאת while חייבת להכיל', 'בתוך הבלוק שלה, כדי לדעת מתי לסיים את הריצה.'],
          ['מצב שבו לולאה רצה לנצח מכיוון שהתנאי שלה לעולם לא משתנה ל-FALSE נקרא לולאה', '.'],
          ['בלולאת for ב-R נהוג לעבור על איברים מתוך', ', כמו למשל רשימת ציונים של נבדקים.']
        ]}
        correctAnswers={['for', 'while', 'תנאי עצירה', 'אין-סופית', 'וקטור']}
        onStatusChange={handleStatusChange}
      />

      <div className="next-section">
        <button 
          className="next-btn" 
          onClick={onNext}
          disabled={!canProceed}
        >
          המשך
        </button>
        {!canProceed && (
          <span>
            * יש לענות על כל שאלות התרגול כדי להמשיך
          </span>        )}
      </div>
    </div>
  );
}

export default Loops;