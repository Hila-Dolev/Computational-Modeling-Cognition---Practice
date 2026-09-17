import React, { useState } from 'react';
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion';
import ShortAnswerQuestion from '../../components/ShortAnswerQuestion';

function Variables({ onNext }) {
  // State for the terminal simulation
  const [showTerminal, setShowTerminal] = useState(false);
  
  // State for the 3 variables in the simulation
  const [vars, setVars] = useState({
    player_name: '"Guest"',
    score: '0',
    high_score: '100'
  });
  
  // State for the assignment controls
  const [targetVar, setTargetVar] = useState('score');
  const [sourceValue, setSourceValue] = useState('');
  const [simMessage, setSimMessage] = useState('נסו להכניס ערך חדש או להעתיק ערך ממשתנה אחר.');

  const [answeredQuestions, setAnsweredQuestions] = useState({
    var_q1: false,
    var_q2: false,
    var_q3_assignment_op: false
  });

  const handleQuestionAnswered = (id, hasAnswer) => {
    setAnsweredQuestions(prev => ({
      ...prev,
      [id]: hasAnswer
    }));
  };

  const canProceed = Object.values(answeredQuestions).every(Boolean);

  // Handle variable assignment logic
  const handleAssign = (e) => {
    e.preventDefault();
    const input = sourceValue.trim();
    if (!input) return;

    let newValue = input;
    let msg = `הערך ${input} הוכנס לתוך ${targetVar}.`;

    // Check if the input matches an existing variable name (variable-to-variable assignment)
    if (vars.hasOwnProperty(input)) {
      newValue = vars[input];
      msg = `הערך של ${input} (${newValue}) הועתק לתוך ${targetVar}.`;
    }

    // Update the specific variable while keeping the others unchanged
    setVars(prev => ({
      ...prev,
      [targetVar]: newValue
    }));
    
    setSimMessage(msg);
    setSourceValue('');
  };



  return (
    <div className="section-card">
      <h1>משתנים (Variables)</h1>
      
      {/* 1. Verbal & Visual Explanation */}
      <p>
        <strong>משתנה</strong> הוא מקום בזיכרון המחשב שבו אנחנו שומרים ערך מסוים כדי שנוכל להשתמש בו שוב ושוב לאורך התוכנית.<br/> 
        ניתן לחשוב עליו בתור <strong>קופסה עם תווית שם</strong>, שבתוכה אפשר לשים נתונים (כמו מספרים או טקסט). 
      </p>
      
      {/* 2. Interactive Variable Box Simulation */}
      <div className="question-box" style={{ textAlign: 'center', backgroundColor: '#f4f7f6' }}>
        <h3 style={{ marginTop: 0 }}>סימולציה: השמת משתנים</h3>
        <p>בחרו משתנה והכניסו לו ערך. תוכלו להקליד ערך חדש (כמו מספר), או להקליד שם של משתנה אחר (למשל <strong>score</strong>) כדי להעתיק את הערך שלו לקופסה החדשה.</p>
        
        {/* Variables Display */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '30px 0', flexWrap: 'wrap' }}>
          
          {/* Box 1: Text Variable (Turquoise) */}
          <div style={{ width: '130px', height: '120px', border: '4px dashed #008080', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <span style={{ fontSize: '14px', color: '#666', marginBottom: '10px', fontWeight: 'bold' }}>player_name</span>
            <strong style={{ fontSize: '20px', color: '#008080', wordBreak: 'break-all', padding: '0 5px' }}>{vars.player_name}</strong>
          </div>

          {/* Box 2: Numeric Variable (Orange) */}
          <div style={{ width: '130px', height: '120px', border: '4px dashed #008080', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <span style={{ fontSize: '14px', color: '#666', marginBottom: '10px', fontWeight: 'bold' }}>score</span>
            <strong style={{ fontSize: '24px', color: '#008080', wordBreak: 'break-all', padding: '0 5px' }}>{vars.score}</strong>
          </div>

          {/* Box 3: Numeric Variable (Orange) */}
          <div style={{ width: '130px', height: '120px', border: '4px dashed #008080', borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <span style={{ fontSize: '14px', color: '#666', marginBottom: '10px', fontWeight: 'bold' }}>high_score</span>
            <strong style={{ fontSize: '24px', color: '#008080', wordBreak: 'break-all', padding: '0 5px' }}>{vars.high_score}</strong>
          </div>

        </div>

        {/* Assignment Controls */}
        <form onSubmit={handleAssign} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }}>
          
          <select 
            value={targetVar} 
            onChange={(e) => setTargetVar(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '2px solid #008080', fontWeight: 'bold', outline: 'none' }}
          >
            <option value="player_name">player_name</option>
            <option value="score">score</option>
            <option value="high_score">high_score</option>
          </select>

          <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#008080', direction: 'ltr' }}>&lt;-</span>

          <input 
            type="text" 
            placeholder="ערך או שם משתנה" 
            value={sourceValue}
            onChange={(e) => setSourceValue(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', outline: 'none' }}
          />

          <button type="submit" className="submit-btn" style={{ float: 'none', margin: 0 }}>השמה</button>
        </form>

        {/* Status Message */}
        <div style={{ marginTop: '15px', color: '#444', fontWeight: 'bold', minHeight: '24px' }}>
          {simMessage}
        </div>
      </div>

      {/* 3. Assignment Rules */}
      <h2>איך מגדירים משתנים? </h2>
      <p>בשפת R, אנחנו מכניסים ערך לתוך משתנה באמצעות <strong>אופרטור ההשמה</strong> (<code>&lt;-</code>), שנראה כמו חץ הפונה לכיוון שם המשתנה שבחרנו.</p>
      <ul className="theory-list">
        <li>
          <strong>שמות חוקיים:</strong> שם משתנה חייב להתחיל באות באנגלית (או נקודה). הוא <strong>לא</strong> יכול להתחיל במספר או להכיל רווחים וסימנים מיוחדים (כמו @ או #).
        </li>
        <li>
          <strong>רגישות לאותיות (Case-sensitive):</strong> המשתנה <code>Score</code> והמשתנה <code>score</code> מייצגים שתי קופסאות שונות לחלוטין! לאותיות גדולות יש משמעות.
        </li>
        <li>
          <strong>דריסה:</strong> אם נכניס ערך חדש למשתנה קיים, הערך הישן יימחק לנצח. בכל רגע נתון הקופסה של המשתנה מכילה רק את הערך האחרון שהוקצה לו.
        </li>
      </ul>
      
      {/* 4. Code Example and Terminal */}
      <h3>בואו נראה את זה בקוד</h3>
      <div className="code-container">
        <button className="run-btn" onClick={() => setShowTerminal(!showTerminal)}>
          ▶ Run
        </button>
        <pre style={{ borderRadius: showTerminal ? '5px 5px 0 0' : '5px' }}>
          <code>
{`# Assign an integer to a variable
num <- 4
print(paste('num is:', num))

# Update the variable value (the old value 4 is overwritten)
num <- 5
print(paste('now, num is:', num))` }
          </code>
        </pre>
        
        {/* Terminal output toggled by button */}
        {showTerminal && (
          <div className="terminal-output" style={{ display: 'block' }}>
            [1] "num is: 4"<br/>
            [1] "now, num is: 5"
          </div>
        )}
      </div>
      
      {/* 5. Operators and Precedence */}
      <h2>אופרטורים וסדר פעולות</h2>
      <p>
        אחרי שלמדנו לאחסן נתונים בתוך משתנים, נרצה להתחיל לעבוד איתם – לבצע חישובים, להשוות בין ערכים, או לשלב תנאים לוגיים. 
        בדיוק כמו בחשבון, גם לשפת R יש חוקים ברורים של קדימות. הטבלה הבאה מציגה את האופרטורים המרכזיים בשפה, מסודרים מהפעולה שתתבצע ראשונה (בראש הטבלה) ועד לאחרונה:
      </p>
      
      <div style={{ textAlign: 'center', margin: '25px 0' }}>
        <img 
          src="/OperatorsR.png" 
          alt="Operator Precedence in R" 
          style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            borderRadius: '8px', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)', 
            border: '1px solid #e0f2f1' 
          }} 
        />
      </div>

      {/* 6. Summary Questions */}
      <h2 > תרגול
      </h2>

      {/* Question 1: Naming rules */}
      <MultipleChoiceQuestion 
        id="var_q1"
        title="1. מה יקרה אם ננסה להגדיר שם של משתנה שמתחיל במספר ב-R (למשל: 1st_grade <- 90)?"
        options={[
          { label: 'המערכת תמיר את המספר לטקסט אוטומטית.', value: 'auto_convert', isCorrect: false },
          { label: 'נקבל שגיאה (Error), מכיוון ששם משתנה לא יכול להתחיל במספר.', value: 'error', isCorrect: true },
          { label: 'המשתנה ייווצר בהצלחה.', value: 'success', isCorrect: false }
        ]}
        onStatusChange={handleQuestionAnswered}
      />

      {/* Question 2: Case sensitivity */}
      <MultipleChoiceQuestion 
        id="var_q2"
        title="2. יצרנו שני משתנים: myVar <- 10 ו- myvar <- 20. מה נכון לומר?"
        options={[
          { label: 'יש לנו משתנה אחד שערכו 20 (הערך נדרס).', value: 'overwritten', isCorrect: false },
          { label: 'נקבל שגיאה על כפילות בשמות.', value: 'duplicate_error', isCorrect: false },
          { label: 'נוצרו שני משתנים נפרדים לחלוטין, כי R רגישה לאותיות גדולות/קטנות.', value: 'case_sensitive', isCorrect: true }
        ]}
        onStatusChange={handleQuestionAnswered}
      />

      {/* Question 3: Fill in the blank (Inline implementation) */}
      <ShortAnswerQuestion 
        id="var_q3_assignment_op"
        title="3. איזה סימן (אופרטור) משמש אותנו כדי להכניס ערך לתוך משתנה ב-R?"
        correctAnswers={['<-', '-> ', '->','=']}
        successMessage="מעולה!"
        errorMessage="לא מדויק. נסו להיזכר בסימן המיוחד של R."
        onStatusChange={handleQuestionAnswered}
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

export default Variables;