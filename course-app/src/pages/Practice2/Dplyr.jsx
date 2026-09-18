import React, { useState } from 'react';
import MultipleChoiceQuestion from '../../components/MultipleChoiceQuestion';
import ShortAnswerQuestion from '../../components/ShortAnswerQuestion';

function Dplyr({ onNext }) {
  const [showTerminalSelect, setShowTerminalSelect] = useState(false);
  const [showTerminalFilter, setShowTerminalFilter] = useState(false);
  const [showTerminalMutate, setShowTerminalMutate] = useState(false);
  const [showTerminalGroup, setShowTerminalGroup] = useState(false);
  const [showTerminalPipe, setShowTerminalPipe] = useState(false);
  
  const [showPopup, setShowPopup] = useState(false);

  const [answeredQuestions, setAnsweredQuestions] = useState({
    dplyr_q1: false,
    dplyr_q2: false,
    dplyr_q3: false,
    dplyr_q4: false
  });

  const handleStatusChange = (id, hasAnswer) => {
    setAnsweredQuestions(prev => ({ ...prev, [id]: hasAnswer }));
  };

  const canProceed = Object.values(answeredQuestions).every(Boolean);

  return (
    <div className="section-card">
      <h1>ספריית dplyr</h1>
      
      {/* 1. מה זה ספריית dplyr? */}
      <p>
        ספריית <strong>dplyr</strong> מיועדת לעבוד עם Data Frames ומספקת סט כלים שמטרתו לנקות, לשנות ולסכם נתונים. 
        היא מייתרת שימוש מסורבל באופרטור <code>$</code> ובלולאות, והופכת את הקוד לקריא ומהיר יותר. <br/>
        כדי להשתמש בפונקציות שלה, יש לטעון אותה בתחילת הקוד על ידי הפקודה <code>library(dplyr)</code>.
      </p>
      <p>
        לקריאה נוספת: <a href="https://datacarpentry.github.io/dc_zurich/R-ecology/04-dplyr.html" target="_blank" rel="noreferrer" style={{color: 'var(--color-primary)'}}>Data Manipulation using dplyr</a>
      </p>

      <hr className="section-divider" />

      {/* 4. טיפ של מקצוענים - בלוק טעינה (מוקדם יותר כדי שיהיה הגיוני מבחינת זרימת הקוד) */}
      <div className="algo-sim-content">
        <strong> טיפ של מקצוענים: טעינת ספריות בקוד</strong><br/>
        בתחילת כל קובץ שבו נרצה לטעון ספריות, ניצור מקטע קוד המיועד לטעינת כל הספריות הרלוונטיות יחד.
        <pre style={{marginTop: '10px', padding: '10px', borderRadius: '4px'}}>
          <code>
{`# Install and load required libraries at the beginning of the script
if(!require(dplyr)) install.packages("dplyr")
library(dplyr)`}
          </code>
        </pre>
      </div>


      {/* 2. פונקציות נפוצות */}
      <h2>פונקציות נפוצות בספרייה</h2>
      <p>כדי להדגים את הפונקציות, נשתמש בטבלת נתונים בשם <code>surveys</code> המכילה מידע על בעלי חיים.</p>

      <h3>select</h3>
      <p>בחירת עמודות (משתנים). הפונקציה בוחרת ומשאירה רק את העמודות שנספק לה את השם שלהן.</p>
      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalSelect(!showTerminalSelect)}>▶ Run</button>
        <pre className={showTerminalSelect ? 'terminal-open' : ''}>
          <code>
{`# Create sample data frame
surveys <- data.frame(
  plot_id = c(1, 2, 3),
  species_id = c("NL", "DM", "DO"),
  weight = c(50, 1000, 2000),
  year = c(1995, 1996, 1995)
)

# Select specific columns
select(surveys, plot_id, species_id, weight)`}
          </code>
        </pre>
        {showTerminalSelect && (
          <div className="terminal-output">
            &nbsp;&nbsp;plot_id species_id weight<br/>
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50<br/>
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DM&nbsp;&nbsp;&nbsp;1000<br/>
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DO&nbsp;&nbsp;&nbsp;2000
          </div>
        )}
      </div>

      <h3>filter</h3>
      <p>בחירת שורות (רשומות). הפונקציה מאפשרת סינון רשומות לפי תנאי מסוים.</p>
      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalFilter(!showTerminalFilter)}>▶ Run</button>
        <pre className={showTerminalFilter ? 'terminal-open' : ''}>
          <code>
{`# Filter rows where the year is exactly 1995
filter(surveys, year == 1995)`}
          </code>
        </pre>
        {showTerminalFilter && (
          <div className="terminal-output">
            &nbsp;&nbsp;plot_id species_id weight year<br/>
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50 1995<br/>
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DO&nbsp;&nbsp;&nbsp;2000 1995
          </div>
        )}
      </div>

      <h3>mutate</h3>
      <p>יצירה או שינוי של עמודה. מאפשר להוסיף עמודת נתונים מחושבים חדשה (למשל, המרת משקל מגרמים לקילוגרמים).</p>
      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalMutate(!showTerminalMutate)}>▶ Run</button>
        <pre className={showTerminalMutate ? 'terminal-open' : ''}>
          <code>
{`# Create a new column 'weight_kg' by dividing 'weight' by 1000
mutate(surveys, weight_kg = weight / 1000)`}
          </code>
        </pre>
        {showTerminalMutate && (
          <div className="terminal-output">
            &nbsp;&nbsp;plot_id species_id weight year weight_kg<br/>
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50 1995&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.05<br/>
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DM&nbsp;&nbsp;&nbsp;1000 1996&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.00<br/>
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DO&nbsp;&nbsp;&nbsp;2000 1995&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.00
          </div>
        )}
      </div>

      <h3>group_by & summarize</h3>
      <p>
        <code>group_by</code> משמשת לקיבוץ נתונים לפי ערכים בעמודות. 
        מיד אחריה נהוג להשתמש ב-<code>summarize</code>, המחשבת מדדים סטטיסטיים לסיכום הנתונים עבור כל קבוצה שנוצרה.
      </p>
      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalGroup(!showTerminalGroup)}>▶ Run</button>
        <pre className={showTerminalGroup ? 'terminal-open' : ''}>
          <code>
{`# Add a 'sex' column for grouping
surveys$sex <- c("M", "M", "F")

# Group the data by sex
grouped_data <- group_by(surveys, sex)

# Summarize to find the mean weight for each group
summarize(grouped_data, mean_weight = mean(weight, na.rm = TRUE))`}
          </code>
        </pre>
        {showTerminalGroup && (
          <div className="terminal-output">
            # A tibble: 2 × 2<br/>
            &nbsp;&nbsp;sex&nbsp;&nbsp;&nbsp;mean_weight<br/>
            &nbsp;&nbsp;&lt;chr&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;dbl&gt;<br/>
            1 F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2000<br/>
            2 M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;525
          </div>
        )}
      </div>


      {/* 3. אופרטור הצינור */}
      <h2>אופרטור הצינור (Pipe): <code>%&gt;%</code></h2>
      <p>
        אופרטור הצינור (<code>%&gt;%</code>) משמש להעברת נתונים בצורה חלקה. הוא לוקח את התוצאה מהשלב הקודם (שנמצא בצד <strong>שמאל</strong>), ומזרים אותה כקלט אל תוך הפונקציה הבאה בתור (שנמצאת בצד <strong>ימין</strong>).
      </p>
      <p>
        השימוש בו מאפשר לנו לקרוא את רצף הפעולות באופן טבעי משמאל לימין, ממש כמו מתכון, במקום לכתוב פונקציות מסורבלות שמקוננות אחת בתוך השנייה.
      </p>

      <div className="algo-sim-content">
        <strong> לא להתבלבל בכיוונים!</strong>
        <ul className="theory-list">
          <li><strong>אופרטור הצינור (<code>%&gt;%</code>) זורם משמאל לימין:</strong> לוקח נתונים מפעולה א' (משמאל) ומעביר אותם לפעולה ב' (מימין).</li>
          <li><strong>אופרטור ההשמה (<code>&lt;-</code>) זורם מימין לשמאל:</strong> מחשב את התוצאה הסופית של כל מה שקורה בצד ימין, ואז שומר אותה אל תוך המשתנה שמחכה בצד שמאל.</li>
        </ul>
      </div>
      
      <div className="code-container ltr-box">
        <button className="run-btn" onClick={() => setShowTerminalPipe(!showTerminalPipe)}>▶ Run</button>
        <pre className={showTerminalPipe ? 'terminal-open' : ''}>
          <code>
{`# 1. Assignment (<-) saves the final result 
#    to 'clean_data' (Right to Left)
# 2. Pipe (%>%) passes the data through 
#    the functions (Left to Right)

clean_data <- surveys %>%
  filter(year == 1995) %>%
  mutate(weight_kg = weight / 1000) %>%
  select(species_id, weight_kg)

print(clean_data)`}
          </code>
        </pre>
        {showTerminalPipe && (
          <div className="terminal-output">
            &nbsp;&nbsp;species_id weight_kg<br/>
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.05<br/>
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.00
          </div>
        )}
      </div>



      {/* שאלות סיכום */}
      <MultipleChoiceQuestion 
        id="dplyr_q1"
        title="1. חוקר רוצה ליצור טבלה חדשה שתכיל עמודה של ציון מתוקנן (חישוב המבוסס על עמודת הציון המקורית). באיזו פונקציה מתוך ספריית dplyr עליו להשתמש?"
        options={[
          { label: 'select() - כי הוא בוחר נתונים.', value: 'select', isCorrect: false },
          { label: 'filter() - כי הוא מסנן שורות.', value: 'filter', isCorrect: false },
          { label: 'mutate() - כי הפונקציה מאפשרת יצירת עמודות חדשות או שינוי קיימות.', value: 'mutate', isCorrect: true }
        ]}
        onStatusChange={handleStatusChange}
      />

      <MultipleChoiceQuestion 
        id="dplyr_q2"
        title="2. מה היתרון המרכזי של אופרטור הצינור (%>%)?"
        options={[
          { label: 'הוא מעביר תוצאה משלב אחד כקלט לשלב הבא, ומאפשר קריאת קוד רציפה וברורה משמאל לימין.', value: 'readable', isCorrect: true },
          { label: 'הוא מחליף את הצורך לטעון ספריות בתחילת הקוד.', value: 'no_lib', isCorrect: false },
          { label: 'הוא מתקן שגיאות אוטומטית בתוך ה-Data Frame.', value: 'fix_errors', isCorrect: false }
        ]}
        onStatusChange={handleStatusChange}
      />

      <ShortAnswerQuestion 
        id="dplyr_q3"
        title="3. פקודת חובה לטעינת הספרייה"
        description="כדי להשתמש בפונקציות כמו filter ו-select, עלינו לטעון את הספרייה בתחילת הקוד. מהי הפקודה המדויקת שעושה זאת? (הניחו שהספרייה כבר מותקנת)"
        correctAnswers={['library(dplyr)']}
        successMessage="מצוין!"
        errorMessage="לא מדויק. חפשו את פקודת הטעינה המלאה לספריית dplyr, לאחר התקנתה."
        onStatusChange={handleStatusChange}
      />

      <ShortAnswerQuestion 
        id="dplyr_q4"
        title="4. סינון שורות"
        description="איזו פונקציה מאפשרת לנו להשאיר בטבלה רק נבדקים שעמדו בתנאי מסוים (למשל, year == 1995)?"
        correctAnswers={['filter', 'filter()']}
        successMessage="נכון מאוד!"
        errorMessage="לא נכון. חפשו פונקציה שעוסקת בסינון הרשומות בטבלה."
        onStatusChange={handleStatusChange}
      />

      <div className="next-section">
        <button 
          className="next-btn" 
          onClick={() => setShowPopup(true)}
          disabled={!canProceed}
        >
          סיום תרגול
        </button>
        {!canProceed && (
          <span>* יש לענות על כל שאלות התרגול כדי להמשיך</span>
        )}
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="popup-title">כל הכבוד! סיימת את תרגול 2.</h2>
            <p className="popup-text">
              סיימנו ללמוד על לולאות, פונקציות, מבני נתונים וספריית dplyr.
              למי שמעוניין להעמיק ולתרגל בעצמו את סביבת העבודה והקוד, הכנו קובץ מחברת לתרגול עצמי.
            </p>
            <a 
              href="/self_practice_2.ipynb" 
              download
              className="submit-btn" 
              onClick={() => {
                setShowPopup(false);
                if (onNext) onNext();
              }}
              style={{ display: 'inline-block', marginTop: '30px', padding: '12px 30px', fontSize: '18px', textDecoration: 'none' }}
            >
              הורדת תרגיל עצמי
            </a>
            
            <div style={{ marginTop: '20px' }}>
              <button 
                onClick={() => {
                  setShowPopup(false);
                  if (onNext) onNext();
                }} 
                style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', textDecoration: 'underline', fontSize: '14px', fontFamily: 'inherit' }}
              >
                סיום ללא הורדה
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dplyr;