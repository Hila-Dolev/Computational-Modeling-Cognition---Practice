import React, { useState } from 'react';
import DragDropQuiz from '../../components/DragDropQuiz';
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion';

function DataStructures({ onNext }) {
  const [showTerminalVector, setShowTerminalVector] = useState(false);
  const [showTerminalMatrix, setShowTerminalMatrix] = useState(false);
  const [showTerminalDF, setShowTerminalDF] = useState(false);
  const [showTerminalDFOps, setShowTerminalDFOps] = useState(false);


  const [answeredQuestions, setAnsweredQuestions] = useState({
    ds_dragdrop: false,
    ds_q1: false,
    ds_q2: false,
    ds_q3: false,
    ds_q4: false
  });

  
  const handleStatusChange = (id, hasAnswer) => {
    setAnsweredQuestions(prev => ({ ...prev, [id]: hasAnswer }));
  };

  const canProceed = Object.values(answeredQuestions).every(Boolean);

  return (
    <div className="section-card">
      <h1>מבני נתונים (Data Structures)</h1>
      
      {/* 1. מה זה ולמה צריך + טיפ מקצוענים */}
      <p>
        מבנה נתונים הוא אמצעי לארגון ולאחסון נתונים, כך שניתן יהיה לגשת אליהם ולבצע עליהם פעולות ביעילות (חיפוש, מיון, מחיקה).
        בחירה במבנה הנכון תשפיע על יעילות הקוד שלנו.
      </p>

      <div className="algo-sim-content">
        <strong> טיפ של מקצוענים:</strong>
        תמיד כדאי לבדוק את סוג הנתונים שלכם באמצעות הפונקציות <code>class()</code> או <code>str()</code> לפני שמתחילים לעבוד עליהם!
      </div>


      {/* 2. פעולות על מבני נתונים - Drag&Drop */}
      <h2>פעולות נפוצות על מבני נתונים</h2>
      <p>על רוב מבני הנתונים נוכל לבצע 5 פעולות מרכזיות. התאימו כל פעולה לתיאור שלה:</p>
      
      <DragDropQuiz 
        id="ds_dragdrop"
        wordBank={['inserting/ erasing', 'searching', 'sorting', 'changing/ transmuting', 'visual display']}
        sentences={[
          ['כאשר נרצה להכניס נתון חדש למבנה או להסיר נתון קיים, נבצע פעולות של', '.'],
          ['כדי לאתר ערך ספציפי מתוך המבנה, נשתמש בפעולת', '.'],
          ['סידור הנתונים לפי סדר מסוים (למשל מהגדול לקטן) נקרא', '.'],
          ['החלפת סוג הנתונים או המבנה שלהם מתבצעת על ידי פעולות של', '.'],
          ['כדי לראות את הנתונים באופן ברור מול העיניים, נבצע', '.']
        ]}
        correctAnswers={['inserting/ erasing', 'searching', 'sorting', 'changing/ transmuting', 'visual display']}
        onStatusChange={handleStatusChange}
      />

      <hr className="section-divider" />

      {/* 3. סוגי מבני נתונים ותרשים + אינדקסים */}
      <h2>סוגי מבני נתונים ואינדקסים</h2>
      <div>
        <img src="/DataStructures.png" alt="תרשים סוגי מבני נתונים" width="100%" />
      </div>
      
      <p>
        מבני הנתונים מתחלקים לשתי משפחות: מבנים ליניאריים ומבנים לא-ליניאריים. <br/>
        <ul>
          <li><strong>מבנים ליניאריים:</strong> הנתונים מסודרים ברצף, אחד אחרי השני. דוגמאות: וקטור (Vector), מטריצה (Matrix).  הגישה במבנים ליניאריים נעשית באמצעות אינדקסים (מיקומים).</li>
          <li><strong>מבנים לא-ליניאריים:</strong> 
          הנתונים אינם מסודרים ברצף, אלא בצורה של עץ או גרף. דוגמאות: רשימה (List) או עץ (tree). הגישה במבנים לא-ליניאריים נעשית באמצעות שמות מפתחות (כמו <code>participant$name</code>).</li>
        </ul>
      </p>

      <div className="algo-sim-content">
        <strong> אינדקסים בשפת R </strong>
        שלא כמו בשפות תכנות אחרות שבהן ספירת המיקומים (אינדקס) מתחילה מ-0, בשפת R הספירה מתחילה מ-1!<br />
        כלומר, הגישה באמצעות אינדקסים תיעשה כך: <code>scores[2]</code> ויוחזר הערך השני במבנה.
      </div>

      <hr className="section-divider" />

      {/* 4. מבנים לינארים - פירוט, ויזואליה וקוד */}
      <h2>מבנים ליניאריים ב-R</h2>
      <p>קיימים שלושה סוגים מרכזיים של מבנים ליניאריים ב-R. עבור כל אחד נראה מהו תפקידו וכיצד ניצור אותו בקוד:</p>

      <h3>1. וקטור (Vector)</h3>
      <p>
        אוסף אלמנטים <strong>מאותו סוג</strong> המסודרים ברצף אחד אחרי השני (מבנה חד-מימדי), כמו רשימת ציונים או זמני תגובה של נבדק.
      </p>
      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalVector(!showTerminalVector)}>▶ Run</button>
        <pre className={showTerminalVector ? 'terminal-open' : ''}>
          <code>
{`# Create a vector of scores
scores <- c(88, 92, 79, 85)

print(scores)`}
          </code>
        </pre>
        {showTerminalVector && (
          <div className="terminal-output">
            [1] 88 92 79 85
          </div>
        )}
      </div>

      <h3>2. מטריצה (Matrix)</h3>
      <p>
        מערך דו-מימדי של נתונים <strong>מאותו סוג</strong>. ניתן לחשוב עליה כעל אוסף של וקטורים, כמו למשל טבלת ציונים של מספר נבדקים במבחנים שונים.
      </p>
      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalMatrix(!showTerminalMatrix)}>▶ Run</button>
        <pre className={showTerminalMatrix ? 'terminal-open' : ''}>
          <code>
{`# Create a matrix with 4 rows and 2 columns
exam_scores <- matrix(c(88, 92, 79, 85, 90, 95, 80, 88), nrow = 4, ncol = 2)

print(exam_scores)`}
          </code>
        </pre>
        {showTerminalMatrix && (
          <div className="terminal-output" style={{ whiteSpace: 'pre' }}>
{`     [,1] [,2]
[1,]   88   90
[2,]   92   95
[3,]   79   80
[4,]   85   88`}
          </div>
        )}
      </div>

      <h3>3. טבלה מרובת ערכים (Data Frame)</h3>
      <p>
        בניגוד למטריצה שבה כל הנתונים חייבים להיות זהים, ב-<strong>Data Frame</strong> כל עמודה יכולה להיות מסוג נתונים שונה (למשל, עמודת טקסט לשם, ועמודה מספרית לגיל). זהו המבנה המתאים והשימושי ביותר לניתוח נתונים קוגניטיביים.
      </p>
      <p>
        כדי לגשת לנתונים בתוך ה-Data Frame נוכל להשתמש באופרטור <code>$</code> כדי לשלוף עמודה שלמה, או באינדקסים בצורה של <code>[row, column]</code> כדי לשלוף נתונים ספציפיים.
      </p>
      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalDF(!showTerminalDF)}>▶ Run</button>
        <pre className={showTerminalDF ? 'terminal-open' : ''}>
          <code>
{`# Create a Data Frame with mixed data types
participants <- data.frame(
  id = 1:3,
  name = c("Adi", "Moran", "Or"),
  age = c(28, 17, 31),
  score = c(90, 85, 88)
)

# Access a specific column using the $ operator
print(participants$name)

# Access a specific cell (Row 2, Column 3 - age of the second participant)
print(participants[2, 3])`}
          </code>
        </pre>
        {showTerminalDF && (
          <div className="terminal-output">
            [1] "Adi"   "Moran" "Or"<br/>
            [1] 17
          </div>
        )}
      </div>

      <div>
        <p><strong>תצוגה של Data Frame לדוגמה:</strong></p>
        <img src="/DataFrame.png" alt="Data Frame מומחש" width="100%" />
      </div>

<h3>פעולות על Data Frame</h3>
      <p>ניתן לבצע פעולות שונות על טבלת הנתונים שלנו בקלות:</p>
      <ul className="theory-list">
        <li><strong>גישה לנתונים (עמודה שלמה):</strong> ציון שם הטבלה, סימן <code>$</code> ושם העמודה (למשל: <code>participants$age</code>).</li>
        <li><strong>גישה לשורה:</strong> שימוש בסוגריים מרובעים עם פסיק, כאשר נשאיר את צד העמודות ריק (למשל: <code>participants[2, ]</code>).</li>
        <li><strong>גישה לערך ספציפי:</strong> ציון מספר השורה ושם (או מספר) העמודה (למשל: <code>participants[3, "score"]</code>).</li>
        <li><strong>הוספת עמודה:</strong> הגדרת עמודה חדשה עם <code>$</code> והכנסת וקטור נתונים לתוכה (למשל הוספת <code>gender</code>).</li>
        <li><strong>הוספת שורה:</strong> יצירת Data Frame חדש עבור השורה, וחיבורו לטבלה הקיימת בעזרת הפונקציה <code>rbind()</code>.</li>
      </ul>

      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalDFOps(!showTerminalDFOps)}>▶ Run</button>
        <pre className={showTerminalDFOps ? 'terminal-open' : ''}>
          <code>
{`# Access data (Column)
print(participants$age)

# Access row
print(participants[2, ])

# Access value
print(participants[3, "score"])

# Add column
participants$gender <- c("F", "F", "M")

# Add row
new_participant <- data.frame(id=4, name="Gome", age=24, score=91, gender="M")
participants <- rbind(participants, new_participant)

print(participants)`}
          </code>
        </pre>
        {showTerminalDFOps && (
          <div className="terminal-output">
            [1] 28 17 31<br/>
            &nbsp;&nbsp;id&nbsp;&nbsp;name age score<br/>
            2&nbsp;&nbsp;2 Moran&nbsp;&nbsp;17&nbsp;&nbsp;&nbsp;&nbsp;85<br/>
            [1] 88<br/>
            &nbsp;&nbsp;id&nbsp;&nbsp;name age score gender<br/>
            1&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;Adi&nbsp;&nbsp;28&nbsp;&nbsp;&nbsp;&nbsp;90&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F<br/>
            2&nbsp;&nbsp;2 Moran&nbsp;&nbsp;17&nbsp;&nbsp;&nbsp;&nbsp;85&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F<br/>
            3&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;31&nbsp;&nbsp;&nbsp;&nbsp;88&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M<br/>
            4&nbsp;&nbsp;4&nbsp;&nbsp;Gome&nbsp;&nbsp;24&nbsp;&nbsp;&nbsp;&nbsp;91&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M
          </div>
        )}
      </div>

      <hr className="section-divider" />
    
      <MultipleChoiceQuestion 
        id="ds_q1"
        title="1. יצרנו וקטור בשם colors המכיל: ('אדום', 'ירוק', 'כחול'). כיצד ניגש למילה 'ירוק' ב-R?"
        options={[
          { label: 'colors[1]', value: 'index_one', isCorrect: false },
          { label: 'colors[2]', value: 'index_two', isCorrect: true },
          { label: 'colors[0]', value: 'index_zero', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <MultipleChoiceQuestion 
        id="ds_q2"
        title="2. מהו ההבדל המרכזי בין מטריצה (Matrix) לטבלה מרובת ערכים (Data Frame) ב-R?"
        options={[
          { label: 'ב-Data Frame כל עמודה יכולה להיות מסוג נתונים שונה, בעוד שבמטריצה כל הנתונים חייבים להיות מאותו סוג בדיוק.', value: 'diff_types', isCorrect: true },
          { label: 'במטריצה ניתן לאחסן רק מספרים, וב-Data Frame ניתן לאחסן רק טקסט.', value: 'type_limit', isCorrect: false },
          { label: 'אין הבדל, אלו פשוט שמות שונים לאותו מבנה נתונים.', value: 'no_diff', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <MultipleChoiceQuestion 
        id="ds_q3"
        title="3. בהינתן טבלת הנתונים participants שהגדרנו, איזו פקודה תשלוף באופן ישיר את כל הערכים שבעמודת ה-age?"
        options={[
          { label: 'participants[age]', value: 'brackets_no_quotes', isCorrect: false },
          { label: 'participants$age', value: 'dollar_sign', isCorrect: true },
          { label: 'participants > age', value: 'greater_than', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <MultipleChoiceQuestion 
        id="ds_q4"
        title="4. 
        באילו פונקציות כדאי להשתמש כדי לבדוק את סוג מבנה הנתונים לפני שמתחילים לעבוד עליו?"
        options={[
          { label: 'type() או check()', value: 'type_check', isCorrect: false },
          { label: 'print() או show()', value: 'print_show', isCorrect: false },
          { label: 'class() או str()', value: 'class_str', isCorrect: true }
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
          <span >
            * יש לענות על כל שאלות התרגול כדי להמשיך
          </span>       
        )}
      </div>
    </div>
  );
}

export default DataStructures;