import {asciiArt} from "./asciiPrinter";

if (typeof process.argv[2] === "undefined") {
  console.error("Error: Please provide a valid argument");
}

type TimeUnit = {
  hours: number,
  minutes: number,
  seconds: number,
}

function parseToTimeUnit(seconds: number): TimeUnit {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - (hours * 3600)) / 60);
  const remainingSeconds = seconds - (hours * 3600) - (minutes * 60);
  return {
    hours,
    minutes,
    seconds: remainingSeconds,
  };
}

let multiplier = 1;
if (typeof process.argv[3] !== "undefined") {
  switch (process.argv[3]) {
    case "m":
      multiplier = 60;
      break;
    case "h":
      multiplier = 3600;
      break;
    default:
      console.error("Error: Please provide a valid argument");
      break;
  }
}

let arg = parseInt(process.argv[2]) * multiplier;
// Every second print out the number of seconds that have passed until the number of seconds passed equal value of arg
const interval = setInterval(() => {
  console.clear();
  console.info(asciiArt(String(arg)));
  if (arg === 0) {
    clearInterval(interval);
    console.clear()
    console.info(asciiArt("Timers up"));
  }
  arg--;
}, 1000);
