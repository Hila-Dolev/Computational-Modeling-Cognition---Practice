import React, { useState } from 'react';
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion';

function Functions({ onNext }) {
  const [showTerminalBasic, setShowTerminalBasic] = useState(false);
  const [showTerminalDefault, setShowTerminalDefault] = useState(false);

  const [answeredQuestions, setAnsweredQuestions] = useState({
    func_q1: false,
    func_q2: false,
    func_q3: false
  });

  const handleStatusChange = (id, hasAnswer) => {
    setAnsweredQuestions(prev => ({ ...prev, [id]: hasAnswer }));
  };

  const canProceed = Object.values(answeredQuestions).every(Boolean);

  return (
    <div className="section-card">
      <h1>פונקציות (Functions)</h1>
      
      <p>
        עד עכשיו כתבנו קטע קוד בכל פעם שרצינו להשתמש בו. <br/>
        <strong>פונקציה</strong> היא יחידת קוד עצמאית שמבצעת פעולה מוגדרת. היא מקבלת נתונים (Inputs), מעבדת אותם, ומחזירה תוצאה (Output).
      </p>

      <div className="algo-sim-content">
        <strong> טיפ של מקצוענים:</strong> 
        לפני שאתם כותבים פונקציה חדשה - תבדקו האם קיימת כבר פונקציה מובנית ב-R שמבצעת את המטרה שלכם (למשל חישוב ממוצע עם <code>mean</code>)!
      </div>

      <h2>למה פונקציות חשובות?</h2>
      <ul className="theory-list">
        <li><strong>שימוש חוזר בקוד:</strong> כותבים פעם אחת, משתמשים המון פעמים.</li>
        <li><strong>קריאות הקוד:</strong> הקוד נראה מסודר ונקי יותר.</li>
        <li><strong>תחזוקה קלה:</strong> אם צריך לתקן באג - מתקנים רק במקום אחד (בתוך הפונקציה).</li>
      </ul>

      <p>כדי להבין את ההבדל, בואו נראה איך נראה קוד שמחשב שטח של שני מלבנים עם ובלי שימוש בפונקציות:</p>
      <div>
        <img src="/functions.png" alt="תרשים מבנה של פונקציה ב-R" width="100%" />
      </div>

      <h2>איך כותבים פונקציה ב-R?</h2>
      <p>כדי ליצור פונקציה, עלינו להכריז עליה, לתת לה שם משמעותי שיעזור לנו להבין מה היא עושה, ולהגדיר אילו ערכים היא מקבלת ומחזירה.</p>
      
      <div>
        <img src="/functions_syntax.png" alt="תרשים מבנה של פונקציה ב-R" width="100%" />
      </div>

      <ul className="theory-list">
        <li><strong>שם הפונקציה:</strong> שם משמעותי שדרכו נקרא לפונקציה בעתיד.</li>
        <li><strong>הכרזה על פונקציה (function):</strong> המילה השמורה ב-R שאומרת למחשב שאנחנו יוצרים פונקציה חדשה.</li>
        <li><strong>החזרת ערכים (return):</strong> הפקודה שקובעת מהו הפלט (התוצאה) שהפונקציה תזרוק החוצה בסיום הריצה. אם אין return, תוחזר תוצאת השורה האחרונה.</li>
        <li><strong>קריאה לפונקציה:</strong> השימוש בפועל בפונקציה שיצרנו, על ידי כתיבת השם שלה והעברת הנתונים הרצויים.</li>
      </ul>


      <h2>פרמטרים (Arguments)</h2>
      <p>
        <strong>פרמטר</strong> הוא משתנה שהפונקציה מקבלת בעת הקריאה, והוא קובע על אילו נתונים הפונקציה תפעל. 
        זה מאפשר לנו להשתמש באותה פונקציה בכל פעם עם נתונים אחרים. <br/>
        בדוגמה הבאה, בנינו פונקציה שמקבלת פרמטר בשם <code>name</code> ומדפיסה ברכת שלום:
      </p>

      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalBasic(!showTerminalBasic)}>▶ Run</button>
        <pre className={showTerminalBasic ? 'terminal-open' : ''}>
          <code>
{`# Define a function with one parameter
greet <- function(name) {
  return(paste("Hello", name))
}

# Call the function with different values
print(greet("Hila"))
print(greet("Uri"))`}
          </code>
        </pre>
        {showTerminalBasic && (
          <div className="terminal-output">
            [1] "Hello Hila"<br/>
            [1] "Hello Uri"
          </div>
        )}
      </div>


      <h2>ערכי ברירת מחדל (Default Values)</h2>
      <p>
        <strong>ערכי ברירת מחדל</strong> הם הערכים שהפונקציה תשתמש בהם במידה והמשתמש לא סיפק ערך בזמן הקריאה.
        זה מוסיף גמישות לקוד ומונע שגיאות אם שכחנו להעביר נתון. <br/>נשנה את הפונקציה שלנו כך שאם לא נעביר לה שם, היא תדפיס "User":
      </p>

      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalDefault(!showTerminalDefault)}>▶ Run</button>
        <pre className={showTerminalDefault ? 'terminal-open' : ''}>
          <code>
{`# Define a function with a default value for 'name'
greet <- function(name = "User") {
  return(paste("Hello", name))
}

# Call the function with and without a value
print(greet("Hila"))
print(greet())`}
          </code>
        </pre>
        {showTerminalDefault && (
          <div className="terminal-output">
            [1] "Hello Hila"<br/>
            [1] "Hello User"
          </div>
        )}
      </div>

      
      <MultipleChoiceQuestion 
        id="func_q1"
        title=" מהו 'פרמטר' (Argument) של פונקציה?"
        options={[
          { label: 'התוצאה הסופית שהפונקציה מחזירה למשתמש.', value: 'output', isCorrect: false },
          { label: 'משתנה שהפונקציה מקבלת בעת הקריאה, כדי לפעול על נתונים ספציפיים.', value: 'input', isCorrect: true },
          { label: 'השם של הפונקציה שדרכו אנחנו קוראים לה.', value: 'name', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <MultipleChoiceQuestion 
        id="func_q2"
        title=" מה מטרתם של ערכי ברירת מחדל (Default values)?"
        options={[
          { label: 'לאפשר לפונקציה לעבוד ולהשתמש בערך קבוע מראש, גם אם המשתמש שכח להזין חלק מהפרמטרים.', value: 'flexibility', isCorrect: true },
          { label: 'למנוע מהפונקציה להחזיר שגיאות (Errors) באופן כללי בכל הקוד.', value: 'no_error', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <MultipleChoiceQuestion 
        id="func_q3"
        title=" מה תפקידה של פקודת ה-return בתוך פונקציה?"
        options={[
          { label: 'היא עוצרת את התוכנית כולה ומחזירה את המשתמש לתחילת הקוד.', value: 'stop_prog', isCorrect: false },
          { label: 'היא מגדירה מהו התנאי שיגרום לפונקציה להפסיק לעבוד (כמו בלולאה).', value: 'condition', isCorrect: false },
          { label: 'היא מגדירה מהו הערך והתוצאה הסופית שהפונקציה תפלוט חזרה החוצה לאחר סיום העיבוד.', value: 'output_def', isCorrect: true }
        ]}
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

export default Functions;