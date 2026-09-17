import React, { useState } from 'react';

function ShortAnswerQuestion({ id, title, description, correctAnswers, successMessage, errorMessage }) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Clean up spaces before checking
    const normalizedAnswer = answer.trim();
    
    if (!normalizedAnswer) {
      setFeedback({ text: 'Please enter an answer.', type: 'incorrect' });
      return;
    }

    // Check if the input matches any of the accepted correct answers
    const isCorrect = correctAnswers.includes(normalizedAnswer);

    if (isCorrect) {
      setFeedback({ text: successMessage || 'נכון מאוד!', type: 'correct' });
      // Future Google Drive fetch logic will go here using the 'id'
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
          onChange={(e) => setAnswer(e.target.value)}
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