import React from 'react';

function InstallationGuide({ onNext }) {
  return (
    <div className="section-card">
      <h1>מדריך התקנה ותחילת עבודה: R ו-Positron</h1>
      
      <p>
        מדריך זה מפרט את השלבים להתקנת שפת R וסביבת הפיתוח Positron, המשמשות אותנו לתרגול א-סינכרוני של מודלים חישוביים וניתוח נתונים. כמו כן, נלמד כיצד להתחיל לעבוד בצורה מסודרת עם קובצי מחברת (.ipynb).
      </p>

      {/* 1. התקנת R */}
      <h2>1. התקנת R על המחשב</h2>
      <p>
        הצעד הראשון הוא התקנת שפת R. היכנסו לאתר <a href="https://cran.r-project.org/" target="_blank" rel="noreferrer">CRAN</a> והורידו את גרסת ההתקנה המתאימה למערכת ההפעלה שלכם.
      </p>
      
      {/* תמונה מה-PDF: עמוד ההורדה של CRAN */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img src="/R_CRAN_Download.png" alt="עמוד הורדת R" style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid #ddd' }} />
      </div>

      <ul className="theory-list">
        <li>הפעילו את קובץ ההתקנה שירד למחשב.</li>
        <li>המשיכו עם הגדרות ברירת המחדל (לחצו Next לאורך כל השלבים):</li>
      </ul>

      {/* תמונות שלבי ההתקנה של R */}
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
        <img src="/R_Setup_Components1.png" alt="התקנת R שלב 1" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/R_Setup_Components2.png" alt="התקנת R שלב 2" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/R_Setup_Components3.png" alt="התקנת R שלב 3" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/R_Setup_Components4.png" alt="התקנת R שלב 4" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/R_Setup_Components5.png" alt="התקנת R שלב 5" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/R_Setup_Components6.png" alt="התקנת R שלב 6" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
      </div>

      {/* 2. התקנת Positron */}
      <h2>2. התקנת סביבת הפיתוח Positron IDE</h2>
      <p>
        לאחר התקנת R, נתקין את Positron - סביבת פיתוח מבית Posit (היוצרים של RStudio) המבוססת על VS Code ומותאמת למדע נתונים.
      </p>
      <ul className="theory-list">
        <li>היכנסו לעמוד ההורדות של Positron והורידו את קובץ ההתקנה.</li>
      </ul>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
        <img src="/positronSite.png" alt="אתר פוזיטרון" style={{ maxWidth: '45%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/positronDowloadPage.png" alt="הורדת פוזיטרון" style={{ maxWidth: '45%', borderRadius: '8px', border: '1px solid #ddd' }} />
      </div>

      <p>הפעילו את הקובץ ועקבו אחר שלבי ההתקנה:</p>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
        <img src="/positronSetup1.png" alt="התקנת פוזיטרון שלב 1" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/positronSetup2.png" alt="התקנת פוזיטרון שלב 2" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/positronSetup3.png" alt="התקנת פוזיטרון שלב 3" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
      </div>
      <p>וזהו! אנחנו מוכנים להתחיל לעבוד. עכשיו כדאי שתתנסו בפתיחת קובץ חדש (מסוג ipynb) ובתחילת העבודה. <br/>בשלבים הבאים יש סרטונים והסברים שיכולים לעזור לעזור בכל שלב בדרך.</p>


      {/* 3. שימוש ב-Positron */}
      <h2>3. שימוש ב-Positron</h2>
      <p>כדי להכיר את הממשק ולהבין כיצד החלונות השונים פועלים יחד, צפו בסרטון ההדרכה הבא:</p>
      
      <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/aNEbn-W_oZc" 
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      {/* 4. תחילת עבודה */}
      <h2>4. תחילת העבודה: פתיחת פרויקט וקובץ המחברת (Notebook)</h2>
      
      <p>
        בקורס שלנו נעבוד עם קובצי <strong>ipynb (Jupyter Notebook)</strong>. זהו פורמט של "מחברת" המאפשר לשלב באותו קובץ גם קוד, גם טקסט והסברים, וגם את תוצאות ההרצה (למשל גרפים וטבלאות) מיד לאחר הקוד שמייצר אותן. זהו הכלי המקובל והנוח ביותר כיום בעולמות מדעי הנתונים.
      </p>

      <ol className="theory-list">
        <li>
          <strong>יצירת תיקיית עבודה:</strong> בתפריט העליון מצד שמאל, לחצו על <code>File &gt; Open Folder</code>. בחרו (או צרו) תיקייה מסודרת במחשב שלכם שבה תרכזו את כל חומרי הקורס. סייר הקבצים בצד שמאל יציג כעת את תוכן התיקייה. מומלץ ליצור תיקייה חדשה בשם <strong>Course</strong> או שם אחר שתבחרו, תחת תיקיית projects במחשב, או ישירות ב-documents, ולהכניס לתוכה את כל הקבצים והמחברות של הקורס.
        </li>
        <li>
          <strong>יצירת הקובץ:</strong> בחלונית סייר הקבצים (Explorer) משמאל, לחצו על הסמל של הוספת קובץ חדש (New File). תנו לקובץ שם הגיוני באנגלית ו<strong>חובה</strong> להקפיד לסיים את השם בסיומת <code>.ipynb</code>. לחצו Enter לאישור.
        </li>
        <li>
          <strong>הגדרת שפת ההרצה (Kernel):</strong> כדי שהמחברת תדע שאנו כותבים ב-R, הסתכלו בפינה הימנית העליונה של חלון המחברת שזה עתה פתחתם. לחצו על הכפתור שמופיע שם (לרוב יופיע כ-Select Kernel) ובחרו מתוך הרשימה את שפת <strong>R</strong>.
        </li>
        <li>
          <strong>כתיבת קוד:</strong> כעת תוכלו ללחוץ על הכפתור <code>+ Code</code> שמופיע בתחתית התא הנוכחי כדי להוסיף תא קוד חדש. כתבו את הפקודות שלכם, ולחצו על כפתור ההפעלה (סמל ה-Play דמוי המשולש) המופיע משמאל לתא כדי להריץ את הקוד ולראות את התוצאה מיד מתחתיו.
        </li>
      </ol>

      <p style={{ marginTop: '30px', fontWeight: 'bold' }}>כאן מחכה סרטון מסכם על כל חווית ההתקנה והשימוש בתוכנות:</p>
      
      <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/mru9z50IOhI" 
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

    </div>
  );
}

export default InstallationGuide;