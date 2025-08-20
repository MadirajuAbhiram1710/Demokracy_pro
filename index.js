const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('<h1>Demockracy</h1><p>This project is about politics and politicians.</p>');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
