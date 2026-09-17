import React, { useState, useEffect } from 'react';

function ShortAnswerQuestion({ id, title, description, correctAnswers, successMessage, errorMessage, onStatusChange }) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  // Dynamically report status whenever the answer text changes
  useEffect(() => {
    if (onStatusChange) {
      // Check if the input is not empty after removing whitespace
      const hasValidInput = answer.trim() !== '';
      onStatusChange(id, hasValidInput);
    }
  }, [answer, id, onStatusChange]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Normalize the input before checking
    const normalizedAnswer = answer.trim();
    
    if (!normalizedAnswer) {
      setFeedback({ text: 'Please enter an answer.', type: 'incorrect' });
      return;
    }

    // Verify against the array of correct answers
    const isCorrect = correctAnswers.includes(normalizedAnswer);

    if (isCorrect) {
      setFeedback({ text: successMessage || 'נכון מאוד!', type: 'correct' });
      // Future Google Drive integration point
      console.log(`Saving to Drive -> Question ID: ${id}, Answer: ${normalizedAnswer}`);
    } else {
      setFeedback({ text: errorMessage || 'לא מדויק. נסו שוב.', type: 'incorrect' });
    }
  };

  return (
    <div className="question-box">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input 
          type="text" 
          id={id}
          name={id}
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            // Clear feedback dynamically when user starts typing again
            if (feedback) setFeedback(null); 
          }}
          placeholder="הקלידו את התשובה כאן..."
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
        />
        <button type="submit" className="submit-btn" style={{ float: 'none', margin: 0 }}>בדוק</button>
      </form>
      
      {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}
    </div>
  );
}

export default ShortAnswerQuestion;