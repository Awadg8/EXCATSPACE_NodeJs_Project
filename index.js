const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/submit', (req, res) => {
    const submittedData = req.body.data;
    res.json(submittedData);
});

app.use(express.static('public'));

app.listen(port, (err) => {
    if (err) {
        console.log(`error in running on port`, err);
    } else {
        console.log(`yeah ! Server is running on port ${port}`);
    }
});

