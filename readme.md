# Real-Time Number Display Application

This is a simple web application that allows an administrator to set a number and displays it in real-time to users. It consists of a Node.js backend with Express and Socket.IO for real-time updates.

## Project Structure

```
real-time-number-display/
├── server.js         # Main backend server
├── package.json      # Project dependencies
├── data.json         # Auto-generated data storage file
└── public/           # Frontend files
    ├── index.html    # User view
    └── admin.html    # Admin control panel
```

## Installation

1. Create a new directory for your project
   ```
   mkdir real-time-number-display
   cd real-time-number-display
   ```

2. Create the necessary files with the code provided in the artifacts
   - `server.js`
   - `package.json`
   - Create a `public` directory for the frontend files:
     ```
     mkdir public
     ```
   - Inside the `public` directory, create:
     - `index.html`
     - `admin.html`

3. Install dependencies
   ```
   npm install
   ```

4. Start the server
   ```
   npm start
   ```

## Usage

- Access the user view: `http://localhost:3000`
- Access the admin panel: `http://localhost:3000/admin`

## Features

- **User View**: Displays the current number in real-time
- **Admin Panel**:
  - Increment/decrement buttons for easy adjustments
  - Direct input field to set a specific number
- **Real-time Updates**: All changes are instantly propagated to all connected users
- **Persistent Storage**: The current number is saved to a file and restored when the server restarts

## Technology Stack

- **Backend**: Node.js with Express
- **Real-time Communication**: Socket.IO
- **Frontend**: HTML, CSS, JavaScript

## Production Considerations

For a production environment, consider the following improvements:

1. **Authentication**: Add user authentication to secure the admin panel
2. **Database Storage**: Replace the file-based storage with a proper database
3. **HTTPS**: Set up SSL certificates for secure communication
4. **Environment Variables**: Use environment variables for configuration
5. **Logging**: Implement proper logging with a service like Winston
6. **Error Handling**: Add more robust error handling throughout the application
