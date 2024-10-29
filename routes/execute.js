// routes/execute.js

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const code = req.body.code;
    let consoleOutput = ''; // Variable to capture console.log output

    // Override console.log to capture output
    const originalConsoleLog = console.log;
    console.log = (msg) => {
        consoleOutput += msg + '\n'; // Append messages to consoleOutput
    };

    try {
        // Execute the code and capture result
        let result = eval(code);

        // Restore console.log to avoid side effects
        console.log = originalConsoleLog;

        // Send both console output and result back
        res.json({
            output: consoleOutput || (result !== undefined ? result.toString() : "No output")
        });
    } catch (error) {
        // Restore console.log in case of error
        console.log = originalConsoleLog;

        // Catch errors and return them in the response
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
