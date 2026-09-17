import React, { useState, useEffect } from 'react';

function DragDropQuiz({ id, wordBank, sentences, correctAnswers, onStatusChange }) {
  // Stores the words currently placed in the blanks
  const [filledBlanks, setFilledBlanks] = useState(Array(sentences.length).fill(null));
  const [feedback, setFeedback] = useState(null);

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData('text/plain', word);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const word = e.dataTransfer.getData('text/plain');
    
    // Update the specific blank with the dragged word
    const newFilledBlanks = [...filledBlanks];
    newFilledBlanks[index] = word;
    setFilledBlanks(newFilledBlanks);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Allows the drop action
  };

  const checkAnswers = () => {
    const isCorrect = filledBlanks.every((word, idx) => word === correctAnswers[idx]);
    if (isCorrect) {
      setFeedback({ text: 'כל הכבוד! כל המשפטים הושלמו נכון.', type: 'correct' });
    } else {
      setFeedback({ text: 'ישנן טעויות. נסו לשנות את מיקום המילים.', type: 'incorrect' });
    }
  };

  // Trigger status change dynamically whenever answers change
  useEffect(() => {
    if (onStatusChange) {
      // Check if there are no empty slots left (null or empty string)
      const isFullyAnswered = filledBlanks.every(ans => ans !== null && ans !== '');
      onStatusChange(id, isFullyAnswered);
    }
  }, [filledBlanks, id, onStatusChange]);

  return (
    <div className="question-box">
      <h3>השלמת משפטים</h3>
      <p>גררו את המילים מהבנק אל החללים המתאימים במשפטים:</p>
      
      {/* Word bank */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {wordBank.map((word, idx) => (
          <div 
            key={idx}
            draggable
            onDragStart={(e) => handleDragStart(e, word)}
            style={{ padding: '8px 16px', background: '#008080', color: 'white', borderRadius: '20px', cursor: 'grab', fontWeight: 'bold' }}
          >
            {word}
          </div>
        ))}
      </div>

      {/* Sentences with blanks */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {sentences.map((sentenceParts, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <span>{sentenceParts[0]}</span>
            <div 
              onDrop={(e) => handleDrop(e, idx)}
              onDragOver={handleDragOver}
              style={{ width: '120px', height: '35px', border: '2px dashed #008080', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: filledBlanks[idx] ? '#e0f2f1' : 'white', fontWeight: 'bold', color: '#008080' }}
            >
              {filledBlanks[idx] || 'גרור לכאן'}
            </div>
            <span>{sentenceParts[1]}</span>
          </div>
        ))}
      </div>

      <button className="submit-btn" onClick={checkAnswers}>בדיקה</button>
      {feedback && <div className={`feedback ${feedback.type}`}>{feedback.text}</div>}
    </div>
  );
}

export default DragDropQuiz;