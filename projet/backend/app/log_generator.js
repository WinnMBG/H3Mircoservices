import { existsSync, mkdirSync, appendFileSync } from 'fs';
import { join } from 'path';

// Sample log messages
const sampleLogs = [
    { level: "INFO", message: "User logged in", user_id: 1 },
    { level: "DEBUG", message: "Query executed", user_id: 3 },
];

const errorLogs = [
    { level: "ERROR", message: "Failed to connect to database", user_id: 2 },
    { level: "ERROR", message: "Permission denied", user_id: 4 },
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
        const log = Math.random() < 0.1 ? errorLogs[Math.floor(Math.random() * errorLogs.length)] : sampleLogs[Math.floor(Math.random() * sampleLogs.length)];

        sendLog(log);
        console.log(log);
    }, Math.floor(Math.random() * (3000 - 500) + 500)); // Random sleep between 0.5s and 3s
}

simulateLogStream();

