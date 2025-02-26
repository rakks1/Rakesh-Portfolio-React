exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }
  
    // Parse the request body
    const { name, contact, message } = JSON.parse(event.body);
  
    // Google Apps Script Web App URL
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzAJoMIErnL_USpKu6X7TsrIdBvywCKYx6FAxXqRdaFqrppFuB2tUtNqdrNbGkDpzTDlA/exec';
  
    try {
      // Forward the request to Google Apps Script
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, contact, message }),
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
  
      // Return a success response
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } catch (error) {
      // Return an error response
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal Server Error' }),
      };
    }
  };