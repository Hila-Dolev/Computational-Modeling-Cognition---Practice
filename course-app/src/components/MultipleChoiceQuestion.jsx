import React, { useState, useEffect } from 'react';

function MultipleChoiceQuestion({ id, title, options, onStatusChange }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState(null);

  // מדווח דינמית לאב ברגע שיש (או אין) בחירה
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
      console.log(`Saving to Drive -> Question ID: ${id}, Answer: ${selectedOption}`);
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
                setSelectedOption(e.target.value);
                if (feedback) setFeedback(null); // מנקה את המשוב הקודם כשבוחרים מחדש
              }}
              style={{ marginRight: '8px' }}
            />
            <label htmlFor={`${id}_${index}`}>{option.label}</label>
          </div>
        ))}
        <button type="submit" className="submit-btn" style={{ float: 'none', marginTop: '10px' }}>בדוק</button>
      </form>
      {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}
    </div>
  );
}

export default MultipleChoiceQuestion;