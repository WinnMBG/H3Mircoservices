import { existsSync, mkdirSync, appendFileSync } from 'fs';
import { join } from 'path';

// Sample log messages
const manAthletes = [
    { level: "INFO", message: "Neymar", user_id: 1 },
    { level: "INFO", message: "LeBron James", user_id: 15 },
    { level: "INFO", message: "Lionel Messi", user_id: 76 },
    { level: "DEBUG", message: "Cristiano Ronaldo", user_id: 20 },
    { level: "DEBUG", message: "Micheal Jordan", user_id: 63 },
    { level: "DEBUG", message: "Kyrie Irving", user_id: 129}
];

const womanAthletes = [
    { level: "ERROR", message: "Sam Kerr", user_id: 2 },
    { level: "ERROR", message: "Alisha Lehmann", user_id: 4 },
    { level: "ERROR", message: "Sabrina Ionescu", user_id: 2 },
    { level: "ERROR", message: "Aja Wilson", user_id: 4 },
    { level: "ERROR", message: "Maya Moore", user_id: 2 },
    { level: "ERROR", message: "Alex Morgan", user_id: 4 }
];

// Local setup
const LOGS_DIR = "../../logs";
const LOG_FILE = "js_logs.log";

// Write log into local file
function sendLog(log) {
    if (!existsSync(LOGS_DIR)) {
        mkdirSync(LOGS_DIR, { recursive: true });
    }

    const logFilePath = join(LOGS_DIR, LOG_FILE);

    appendFileSync(logFilePath, JSON.stringify(log) + "\n");
    console.log(`Sent log: ${JSON.stringify(log)}`);
}

function simulateLogStream() {
    setInterval(() => {
        const log = Math.random() < 0.1 ? manAthletes[Math.floor(Math.random() * manAthletes.length)] : womanAthletes[Math.floor(Math.random() * womanAthletes.length)];
        sendLog(log);
        console.log(log);
    }, Math.floor(Math.random() * (3000 - 500) + 500)); // Random sleep between 0.5s and 3s
}

simulateLogStream();

