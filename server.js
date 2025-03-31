const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const fs = require('fs');

// Create Express app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Store the current number in memory (in production, use a database)
let currentNumber = 0;

// Store data to persist across server restarts
const DATA_FILE = path.join(__dirname, 'data.json');

// Load number from data file if it exists
try {
    if (fs.existsSync(DATA_FILE)) {
        const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
        currentNumber = data.number || 0;
        console.log(`Loaded number from file: ${currentNumber}`);
    }
} catch (error) {
    console.error('Error reading data file:', error);
}

// Save current number to file
function saveNumberToFile() {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify({ number: currentNumber }));
        console.log(`Saved number to file: ${currentNumber}`);
    } catch (error) {
        console.error('Error saving data file:', error);
    }
}

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// WebSocket connection handling
io.on('connection', (socket) => {
    console.log('New client connected');
    
    // Send current number to the client
    socket.emit('current number', { number: currentNumber });
    
    // Handle number updates from admin
    socket.on('update number', (data) => {
        console.log('Number update received:', data.number);
        currentNumber = data.number;
        
        // Broadcast to all clients
        io.emit('number update', { number: currentNumber });
        
        // Save to file
        saveNumberToFile();
    });
    
    // Handle disconnect
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`View the application at http://localhost:${PORT}`);
    console.log(`Access the admin panel at http://localhost:${PORT}/admin`);
});
