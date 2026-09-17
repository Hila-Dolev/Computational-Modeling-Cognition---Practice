import React, { useState } from 'react';

function MultipleChoiceQuestion({ id, title, options }) {
  const [selected, setSelected] = useState('');
  const [feedback, setFeedback] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selected) {
      setFeedback({ text: 'Please select an answer.', type: 'incorrect' });
      return;
    }

    // Find if the selected option is the correct one
    const isCorrect = options.find(opt => opt.value === selected)?.isCorrect;

    if (isCorrect) {
      setFeedback({ text: 'נכון מאוד!', type: 'correct' });
      // Future Google Drive fetch logic will go here using the 'id'
      console.log(`Saving to Drive -> Question ID: ${id}, Answer: ${selected}`);
    } else {
      setFeedback({ text: 'לא מדויק. נסו שוב.', type: 'incorrect' });
    }
  };

  return (
    <div className="question-box">
      {/* The question itself serves as the title */}
      <h3>{title}</h3>
      
      <form onSubmit={handleSubmit}>
        {options.map((opt, index) => (
          <div key={index} style={{ marginBottom: '8px' }}>
            <input 
              type="radio" 
              name={id} 
              id={`${id}_${index}`} 
              value={opt.value} 
              onChange={(e) => setSelected(e.target.value)}
              checked={selected === opt.value}
            />
            <label htmlFor={`${id}_${index}`} style={{ cursor: 'pointer' }}> {opt.label}</label>
          </div>
        ))}
        <button type="submit" className="submit-btn">בדיקה</button>
      </form>
      
      {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}
    </div>
  );
}

export default MultipleChoiceQuestion;