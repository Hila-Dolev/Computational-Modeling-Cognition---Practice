import React, { useState } from 'react';

function OpenQuestion({ title, text, placeholder = "הקלידו את תשובתכם כאן (לא חובה)...", questionId, onAnswer }) {
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setAnswer(val);
    
    // Report to parent immediately on every keystroke
    if (onAnswer) {
      onAnswer(questionId, val);
    }
  };

  return (
    <div className="question-box">
      <h3>{title}</h3>
      <p>{text}</p>
      
      <textarea 
        value={answer}
        onChange={handleChange}
        rows="4" 
        placeholder={placeholder}
        style={{ 
          width: '100%', 
          padding: '10px', 
          borderRadius: '4px', 
          border: '1px solid #ccc',
          fontFamily: 'inherit',
          marginTop: '10px',
          resize: 'vertical',
          boxSizing: 'border-box'
        }}
      />
    </div>
  );
}

export default OpenQuestion;