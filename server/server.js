const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


// GET route
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

// Start the server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});