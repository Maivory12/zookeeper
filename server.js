const express = require (`express`);

// instantiate the server
const app = express();



// Tell the server to listen for request
app.listen(3001, () => {
    console.log (`API server now on port 3001`);
});