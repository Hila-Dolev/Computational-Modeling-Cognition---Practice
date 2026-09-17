import React, { useState, useEffect, useRef } from 'react';

function OpenQuestion({ title, text, placeholder = "הקלידו את תשובתכם כאן (לא חובה)...", questionId }) {
  const [answer, setAnswer] = useState('');
  
  // A ref to keep track of the latest answer value for the unmount cleanup function
  const answerRef = useRef('');

  // Update both the state (for display) and the ref (for saving)
  const handleChange = (e) => {
    setAnswer(e.target.value);
    answerRef.current = e.target.value;
  };

  // The function that actually handles the saving process
  const handleSave = () => {
    const finalAnswer = answerRef.current.trim();
    if (finalAnswer !== '') {
      // Future Google Drive fetch logic will go here
      console.log(`Saving to Drive -> Question: ${questionId}, Answer: ${finalAnswer}`);
    }
  };

  // Save automatically when the component is unmounted (e.g., user clicks "Next")
  useEffect(() => {
    return () => {
      handleSave();
    };
  }, []);

  return (
    <div className="question-box">
      <h3>{title}</h3>
      <p>{text}</p>
      
      <textarea 
        value={answer}
        onChange={handleChange}
        onBlur={handleSave} // Also save when the user clicks outside the textarea
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