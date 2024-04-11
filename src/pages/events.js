import React, { useState, useEffect } from 'react';
import '../css/styles.css';
import DrawerComponent from '../components/Drawer';
import Navbar from '../components/Navbar';
import {
	useTheme,
	useMediaQuery
} from "@mui/material";

const Events = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000); // Update every second
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Cleanup interval on unmount or when isRunning changes
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeElapsed(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

	return (
		<div>
			<div>
				{isMobile ? (
					<DrawerComponent />
				) : (
					<Navbar />
				)}
			</div>
			<div className="content">
				<h1>Welcome to Arthur's Events</h1>
				<p>Under Construction...</p>
				<div>
				<h1>Stopwatch</h1>
				<div>
					<p>{formatTime(timeElapsed)}</p>
					<button onClick={startTimer} disabled={isRunning}>Start</button>
					<button onClick={pauseTimer} disabled={!isRunning}>Pause</button>
					<button onClick={resetTimer}>Reset</button>
				</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
