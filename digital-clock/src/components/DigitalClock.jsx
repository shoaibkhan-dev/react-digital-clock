import React, { useEffect, useRef, useState } from "react";
import "./DigitalClock.css";

 function DigitalClock() {
const [time, setTime] = useState(() => new Date());
const intervalRef = useRef(null);

const startClock = () => {
setTime(new Date());
if (intervalRef.current) return;
intervalRef.current = setInterval(() => {
setTime(new Date());
}, 1000);
};

const stopClock = () => {
if (intervalRef.current) {
clearInterval(intervalRef.current);
intervalRef.current = null;
}
};

useEffect(() => {
startClock();
return () => {
if (intervalRef.current) clearInterval(intervalRef.current);
};
}, []);

const formatTime = (date) => {
const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();
const ampm = h >= 12 ? "PM" : "AM";
const hh = ((h + 11) % 12) + 1;
const pad = (n) => String(n).padStart(2, "0");
return `${pad(hh)}:${pad(m)}:${pad(s)} ${ampm}`;
};

return (
<div className="clock-container">
    <h1>DIGITAL CLOCK</h1>
<div className="clock-time">{formatTime(time)}</div>
<div className="clock-buttons">
<button className="stop-btn" onClick={stopClock}>Stop</button>
<button className="start-btn" onClick={startClock}>Start</button>
</div>
</div>
);
}

export default DigitalClock;