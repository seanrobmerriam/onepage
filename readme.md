# Real-Time Number Display Application

This is an example web application that allows an administrator to set a number and display it in real-time to users. Node.js backend with Express and Socket.IO for real-time updates.

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

This is for a local install—if you want to use Render, clone this repo and connect it as a web service.

1. Clone this repo, or make sure yours has the correct structure as the tree above.

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


## Stack

- **Backend**: Node.js with Express
- **Real-time Updates**: Socket.IO
- **Frontend**: HTML, CSS, JavaScript

