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

      {/* 2. התקנת R Studio */}
      <h2>2. התקנת סביבת הפיתוח R Studio</h2>
      <p>
        לאחר התקנת R, נתקין את R Studio - סביבת פיתוח המותאמת לעבודה עם R וניתוח נתונים 
      </p>
      <ul className="theory-list">
        <li>היכנסו ל<a href="https://posit.co/downloads" target="_blank" rel="noreferrer">עמוד ההורדות של RStudio (מבית Posit)</a> והורידו את קובץ ההתקנה החינמי (RStudio Desktop).</li>
      </ul>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
        <img src="/RSite.png" alt="אתר R Studio" style={{ maxWidth: '45%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/RDownloadPage.png" alt="הורדת R Studio" style={{ maxWidth: '45%', borderRadius: '8px', border: '1px solid #ddd' }} />
      </div>

      <p>הפעילו את הקובץ ועקבו אחר שלבי ההתקנה:</p>
      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap' }}>
        <img src="/rstudioSetup1.png" alt="התקנת R Studio שלב 1" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/rstudioSetup2.png" alt="התקנת R Studio שלב 2" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
        <img src="/rstudioSetup3.png" alt="התקנת R Studio שלב 3" style={{ maxWidth: '30%', borderRadius: '8px', border: '1px solid #ddd' }} />
      </div>
      <p>וזהו! אנחנו מוכנים להתחיל לעבוד. עכשיו כדאי שתתנסו בפתיחת קובץ חדש (מסוג R Markdown) ובתחילת העבודה. <br/>בשלבים הבאים יש סרטונים והסברים שיכולים לעזור לעזור בכל שלב בדרך.</p>


      {/* 3. תחילת עבודה */}
      <h2>3. תחילת העבודה: פתיחת פרויקט וקובץ המחברת (Notebook)</h2>
      
      <p>
        בקורס שלנו נעבוד עם קובצי <strong>R Markdown</strong> (סיומת <code>.Rmd</code>). זהו פורמט המאפשר לשלב באותו קובץ גם קוד, גם טקסט והסברים, וגם את תוצאות ההרצה (למשל גרפים וטבלאות) מיד לאחר הקוד שמייצר אותן. 
      </p>

      <ol className="theory-list">
        <li>
          <strong>יצירת הקובץ:</strong> בתפריט העליון של RStudio, לחצו על <code>File &gt; New File &gt; R Markdown</code>. הזינו כותרת למסמך, ודאו שפורמט הפלט הוא <strong>HTML</strong>, ולחצו OK. לאחר מכן, מחקו את כל טקסט ההדגמה שמופיע מתחת לפסקת ההגדרות העליונה (התחומה ב-<code>---</code>).
        </li>
        <li>
          <strong>יישור לעברית (RTL):</strong> כדי שההסברים יוצגו כראוי מימין לשמאל, הקלידו את התגית <code>&lt;div dir="rtl"&gt;</code> מיד מתחת לפסקת ההגדרות, ואת התגית הסוגרת <code>&lt;/div&gt;</code> בשורה האחרונה של המסמך.
        </li>
        <li>
          <strong>כתיבה ותאי קוד (Source Mode):</strong> כברירת מחדל, הקובץ נפתח בתצוגת קוד (Source). טקסט והסברים נכתבים בחופשיות. כדי להוסיף קוד R, יש ליצור "תא קוד" (Chunk) שמתחיל בשלושה גרשיים <code>```{"{r}"}</code> ומסתיים בשלושה גרשיים <code>```</code>. ניתן להקליד זאת ידנית, או ללחוץ בסרגל הכלים על כפתור ה-<strong>Insert</strong> (סמל ריבוע ירוק עם האות C) ולבחור ב-<strong>R</strong>.
        </li>
        <li>
          <strong>הפקת תוצר להגשה:</strong> בסיום הכתיבה, לחצו על כפתור ה-<strong>Knit</strong> (סמל של כדור צמר) בסרגל העליון. פעולה זו תריץ את כל הקוד שכתבתם ותייצר עבורכם קובץ HTML מעוצב ונקי שמוכן להגשה.
        </li>
        <li>
          <strong>טיפ - סביבת כתיבה ויזואלית:</strong> לעבודה נוחה יותר עם שילוב של טקסט בעברית ומונחים באנגלית, מומלץ לעבור לתצוגת <strong>Visual</strong> (באמצעות הכפתור בסרגל הכלים העליון של המסמך). מצב זה מתנהג כמו מעבד תמלילים (בדומה ל-Word) ומסתיר את סימני העיצוב (כמו כוכביות או גרשיים), מה שמקל מאוד על כתיבת ההסברים.
        </li>
      </ol>

      <p style={{ marginTop: '30px', fontWeight: 'bold' }}>כאן מחכים סרטונים מסכם על כל חווית ההתקנה והשימוש בתוכנות:</p>
      
      <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>
        <div className="video-container">
          <iframe 
            src="https://youtube.com/embed/K418swtFnik?si=SsfRdZUTCk3HGkJS" 
            title="YouTube video player" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>

        <div className="video-container">
          <iframe 
            src="https://youtube.com/embed/55ZZZhpt0vY?si=yobNNtYie_15Zlb0" 
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