import React, { useState, useEffect } from 'react';

function MultipleChoiceQuestion({ id, title, options, onStatusChange, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState(null);

  // Report status to parent dynamically
  useEffect(() => {
    if (onStatusChange) {
      const hasAnswer = selectedOption !== '';
      onStatusChange(id, hasAnswer);
    }
  }, [selectedOption, id, onStatusChange]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setFeedback({ text: 'אנא בחרו תשובה.', type: 'incorrect' });
      return;
    }
    
    const option = options.find(opt => opt.value === selectedOption);
    if (option && option.isCorrect) {
      setFeedback({ text: 'נכון מאוד!', type: 'correct' });
    } else {
      setFeedback({ text: 'תשובה שגויה, נסו שוב.', type: 'incorrect' });
    }
  };

  return (
    <div className="question-box">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input 
              type="radio" 
              id={`${id}_${index}`} 
              name={id} 
              value={option.value}
              checked={selectedOption === option.value}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedOption(val);
                if (feedback) setFeedback(null); // Clear previous feedback
                
                // Report the selected answer to the parent component immediately
                if (onAnswer) {
                  onAnswer(id, val);
                }
              }}
              style={{ marginRight: '8px' }}
            />
            <label htmlFor={`${id}_${index}`}>{option.label}</label>
          </div>
        ))}
        <button type="submit" className="submit-btn" style={{ float: 'none', marginTop: '10px' }}>בדיקה</button>
      </form>
      {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}
    </div>
  );
}

export default MultipleChoiceQuestion;