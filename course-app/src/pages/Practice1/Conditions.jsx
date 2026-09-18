import React, { useState } from 'react';
import ShortAnswerQuestion from '../../components/ShortAnswerQuestion';
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion';

function Conditions({ onNext }) {
  const [showTerminal, setShowTerminal] = useState(false);
  
  // State for the conditional simulation
  const [simGrade, setSimGrade] = useState('');
  const [simResult, setSimResult] = useState({ text: 'הקלידו ציון כדי לראות את התוצאה', color: '#888', activePath: null });

  // State for mandatory questions tracking
  const [answeredQuestions, setAnsweredQuestions] = useState({
    cond_q1_elseif: false,
    cond_q2_flow: false
  });

  const handleStatusChange = (id, hasAnswer) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [id]: hasAnswer
    }));
  };

  const canProceed = Object.values(answeredQuestions).every(Boolean);

  // Simulation Logic
  const handleCheckGrade = (e) => {
    e.preventDefault();
    const grade = parseInt(simGrade);
    
    if (isNaN(grade)) {
      setSimResult({ text: 'נא להזין מספר תקין', color: '#888', activePath: null });
      return;
    }

    // if
    if (grade >= 90) {
      setSimResult({ text: 'מצוין! (התנאי הראשון התקיים)', color: '#008080', activePath: 'if' });
    } 
    // else if
    else if (grade >= 60) {
      setSimResult({ text: 'עובר. (התנאי השני התקיים)', color: '#f39c12', activePath: 'elseif' });
    } 
    // else
    else {
      setSimResult({ text: 'נכשל. (אף תנאי לא התקיים, הגענו לברירת המחדל)', color: '#e74c3c', activePath: 'else' });
    }
  };

  return (
    <div className="section-card">
      <h1>משפטי תנאי (Conditions)</h1>
      <p>
        <strong>משפטי תנאי</strong> מאפשרים לתוכנית שלנו לקבל החלטות, ולהתפצל למסלולים שונים בהתאם למצב. 
        הם שימושיים מאוד עבור:
      </p>
      <ul style={{ marginBottom: '20px' }}>
        <li><strong>סיווג פריטים</strong> לפי ערכים (למשל: חלוקת ציונים לרמות או דירוג משתמשים).</li>
        <li><strong>טיפול במצבים מיוחדים</strong> (למשל: מה לעשות אם חסר נתון בטבלה, או אם קרתה שגיאה).</li>
      </ul>

      <p><strong>הכלל הבסיסי:</strong> אם התנאי מתקיים ⟵ מבצעים פעולה אחת. אם לא ⟵ מבצעים פעולה אחרת.</p>

      {/* Theory List based on the presentation slide */}
      <ol className="theory-list">
        <li>
          <strong>if: </strong>
          בודק האם התנאי נכון. זו תמיד תהיה נקודת ההתחלה. למשל: <i>האם הציון גדול מ-90?</i>
        </li>
        <li>
          <strong>else if: </strong>
          בודק תנאי נוסף <strong>רק אם</strong> התנאי הקודם לא התקיים. אפשר לשרשר כמה כאלה שרוצים.
        </li>
        <li>
          <strong>else: </strong>
          פועל כ"ברירת מחדל" אם אף אחד מהתנאים הקודמים לא התקיים. לא כותבים לידו תנאי.
        </li>
      </ol>

      {/* Interactive Grade Classifier Simulation */}
      <div className="question-box" style={{ textAlign: 'center', backgroundColor: '#f4f7f6', marginTop: '30px' }}>
        <h3 style={{ marginTop: 0 }}>סימולציה: סיווג ציונים</h3>
        <p>הכניסו ציון (0-100) וראו באיזה מסלול התוכנית בוחרת לצעוד.</p>
        
        <form onSubmit={handleCheckGrade} style={{ display: 'flex', justifyContent: 'center', gap: '10px', margin: '20px 0' }}>
          <input 
            type="number" 
            placeholder="הזינו ציון..." 
            value={simGrade}
            onChange={(e) => setSimGrade(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '120px', textAlign: 'center' }}
          />
          <button type="submit" className="submit-btn" style={{ float: 'none', margin: 0 }}>בדוק ציון</button>
        </form>

        {/* Visual paths */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginTop: '20px' }}>
          <div style={{ flex: 1, padding: '10px', borderRadius: '4px', background: simResult.activePath === 'if' ? '#008080' : '#fff', color: simResult.activePath === 'if' ? '#fff' : '#aaa', border: `2px solid ${simResult.activePath === 'if' ? '#008080' : '#eee'}`, transition: 'all 0.3s ease' }}>
            <strong>if</strong><br/>(grade &gt;= 90)
          </div>
          <div style={{ flex: 1, padding: '10px', borderRadius: '4px', background: simResult.activePath === 'elseif' ? '#f39c12' : '#fff', color: simResult.activePath === 'elseif' ? '#fff' : '#aaa', border: `2px solid ${simResult.activePath === 'elseif' ? '#f39c12' : '#eee'}`, transition: 'all 0.3s ease' }}>
            <strong>else if</strong><br/>(grade &gt;= 60)
          </div>
          <div style={{ flex: 1, padding: '10px', borderRadius: '4px', background: simResult.activePath === 'else' ? '#e74c3c' : '#fff', color: simResult.activePath === 'else' ? '#fff' : '#aaa', border: `2px solid ${simResult.activePath === 'else' ? '#e74c3c' : '#eee'}`, transition: 'all 0.3s ease' }}>
            <strong>else</strong><br/>(כל השאר)
          </div>
        </div>

        <div style={{ marginTop: '20px', padding: '15px', background: '#fff', borderRadius: '6px', color: simResult.color, fontWeight: 'bold', fontSize: '1.2em', border: `2px solid ${simResult.color}` }}>
          {simResult.text}
        </div>
      </div>

      {/* Code and Terminal */}
      <h3>איך זה נראה ב-R?</h3>
      <p>בואו נבדוק האם שני משתנים שווים זה לזה באמצעות האופרטור <code>==</code>.</p>
      
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

      <h3 style={{ borderBottom: '2px solid #e0f2f1', paddingBottom: '10px', marginTop: '40px' }}>
        תרגול מסכם
      </h3>

      {/* Question 1: Fill in the blank (Replaced with dynamic component) */}
      <ShortAnswerQuestion 
        id="cond_q1_elseif"
        title="1. השלמת משפטים"
        description="כדי לבדוק תנאי נוסף במקרה שהתנאי הראשון לא התקיים, נשתמש בפקודה:"
        correctAnswers={['else if', 'elseif']}
        successMessage="מצוין! תשובה מדויקת."
        errorMessage="לא מדויק, נסו שוב (רמז: שתי מילים באנגלית)."
        onStatusChange={handleStatusChange}
      />

      {/* Question 2: Multiple choice logic check */}
      <MultipleChoiceQuestion 
        id="cond_q2_flow"
        title="2. מה יקרה אם התנאי בתוך ה-if הוא שקר (False), ואין בקוד בלוק של else?"
        options={[
          { label: 'התוכנית תקרוס ותציג הודעת שגיאה (Error).', value: 'error', isCorrect: false },
          { label: 'התוכנית פשוט תדלג על הבלוק של ה-if ותמשיך לשורה הבאה בקוד בלי לעשות כלום.', value: 'skip', isCorrect: true },
          { label: 'התוכנית תבצע את ה-if בכל זאת, אבל תדפיס אזהרה.', value: 'warning', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      {/* Next button area */}
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

export default Conditions;