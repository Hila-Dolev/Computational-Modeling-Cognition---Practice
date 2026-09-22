import React, { useState, useEffect } from 'react';

function ShortAnswerQuestion({ id, title, description, correctAnswers, successMessage, errorMessage, onStatusChange, onAnswer }) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (onStatusChange) {
      const hasValidInput = answer.trim() !== '';
      onStatusChange(id, hasValidInput);
    }
  }, [answer, id, onStatusChange]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedAnswer = answer.trim();
    
    if (!normalizedAnswer) {
      setFeedback({ text: 'Please enter an answer.', type: 'incorrect' });
      return;
    }

    const isCorrect = correctAnswers.includes(normalizedAnswer);

    if (isCorrect) {
      setFeedback({ text: successMessage || 'נכון מאוד!', type: 'correct' });
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
            const val = e.target.value;
            setAnswer(val);
            if (feedback) setFeedback(null); 
            
            // Continuous update to parent
            if (onAnswer) {
              onAnswer(id, val);
            }
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