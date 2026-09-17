import React, { useState } from 'react';

function AlgoSimulation() {
  const [step, setStep] = useState(0);

  const stepsData = [
    { 
      title: 'נגדיר את הבעיה', 
      text: 'מטרה: למצוא את הציון הגבוה ביותר במבחן מתוך הרשימה הבאה: 85, 92, 78.' 
    },
    { 
      title: 'הפרד ומשול', 
      text: 'אין צורך להשוות את כל המספרים יחד.\n נשווה כל פעם רק זוג מספרים יחיד, עד שנגיע למספר הגדול ביותר - נשמור בצד את הציון הראשון, ואז נשווה אותו לבא בתור. נשמור תמיד את הגבוה מביניהם.' 
    },
    { 
      title: 'בחירת כלים', 
      text: 'נצטרך "לולאה" כדי לעבור על כל הציונים, ו"משתנה" כדי לשמור את הציון הכי גבוה שמצאנו עד כה.' 
    },
    { 
      title: 'מימוש ובדיקה', 
      text: 'הרצה: שומרים 85. בודקים את 92 - הוא גדול יותר, אז שומרים 92. בודקים את 78 - קטן יותר. התוצאה: 92. עובד!' 
    }
  ];

  const handleNext = () => {
    if (step < stepsData.length - 1) {
      setStep(step + 1);
    } else {
      setStep(0);
    }
  };

  return (
    <div className="algo-sim-container">
      <h3 className="algo-sim-header">איך לגשת לבעיה חישובית?</h3>
      
      <div className="algo-sim-track">
        {stepsData.map((_, index) => {
          // Dynamic class assignment based on the current step
          let stepClass = "algo-sim-step";
          if (index === step) stepClass += " active";
          else if (index < step) stepClass += " completed";
          
          return (
            <div key={index} className={stepClass}>
              {index + 1}
            </div>
          );
        })}
      </div>

      <div className="algo-sim-content">
        <strong>{stepsData[step].title}</strong>
        {stepsData[step].text}
      </div>

      <button className="submit-btn center-btn" onClick={handleNext}>
        {step < stepsData.length - 1 ? 'הדגם את השלב הבא' : 'התחל מחדש'}
      </button>
    </div>
  );
}

export default AlgoSimulation;