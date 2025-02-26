import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NumberGuessingGame.css';

// Define the function to generate a random number
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const NumberGuessingGame = () => {
  // Use an initial state function for useState
  const [targetNumber, setTargetNumber] = useState(() => generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [points, setPoints] = useState(10); // State to keep track of points
  const [attempts, setAttempts] = useState(5); // State to keep track of attempts
  const [gameOver, setGameOver] = useState(false); // State to track game over

  const navigate = useNavigate();
            
  const handleNavigation = () => {
    navigate('/reactpro');
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);
    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number');
      return;
    }
    if (userGuess < targetNumber) {
      setMessage('Too low! Try again.');
      decreasePoints();
    } else if (userGuess > targetNumber) {
      setMessage('Too high! Try again.');
      decreasePoints();
    } else {
      setMessage('Congratulations! You guessed the number.');
      setPoints(points + 10); // Add 10 points
      setTargetNumber(generateRandomNumber()); // Reset the game
      setAttempts(5); // Reset attempts
    }
    setGuess('');
  };

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const decreasePoints = () => {
    setAttempts(attempts - 1);
    setPoints((prevPoints) => {
      const newPoints = prevPoints - 2;
      if (newPoints <= 0) {
        setMessage('Game Over! You ran out of points.');
        setPoints(0);
        setGameOver(true); // Set game over
      }
      return newPoints > 0 ? newPoints : 0;
    });

    if (attempts <= 1) {
      setMessage('No more attempts left. The game is reset.');
      setTargetNumber(generateRandomNumber()); // Reset the game
      setAttempts(5); // Reset attempts
    }
  };

  const resetGame = () => {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setPoints(10);
    setAttempts(5);
    setGameOver(false);
  };

  return (
    <div className='game-container'>
        <div className="bg-animation">
          <div id="stars"></div>
        </div>
        <div className="logo">
          <img src="./assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
        </div>
        <i className="bi bi-arrow-left" onClick={handleNavigation}></i>

        <div className='gamewindow'>
    <h2 className='game-title'>Number Guessing Game</h2>
    <p className='points'>Points: {points}</p>
    <p className='attempts'>Attempts Left: {attempts}</p>
    {gameOver ? (
      <button className='reset-btn' onClick={resetGame}>Play Again</button>
    ) : (
      <>
        <input className='game-input'
          type="number" 
          value={guess} 
          onChange={handleInputChange} 
          placeholder="Enter your guess 0-10"
        />
        <button className='guess-btn' onClick={handleGuess}>Guess</button>
      </>
    )}
    <p className='message'>{message}</p>
    </div>
  </div>
  
  );
};

export default NumberGuessingGame;
