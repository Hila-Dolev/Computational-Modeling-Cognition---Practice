// src/utils/apiService.js

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw6BHxlF5MwuYkrwmia7rd4aMgyoJjbWxCDZI4XKFa79-NH59rdgcJxu9YEEx6leFjC/exec'; // השאירי את הקישור הקיים שלך

// הפונקציה מקבלת עכשיו את שם התרגול בנוסף לנתונים
export const saveAnswerToSheet = async (sheetName, dataPayload) => {
  try {
    // הוספת שם התרגול לתוך אובייקט הנתונים שאנחנו שולחים
    const payloadWithSheet = {
      ...dataPayload,
      sheetName: sheetName 
    };

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payloadWithSheet),
    });

    console.log(`Answer saved successfully to ${sheetName}`);
  } catch (error) {
    console.error('Error saving answer:', error);
  }
};