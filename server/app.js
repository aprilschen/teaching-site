const express = require('express');
const app = express();
const port = process.env.PORT || 2006;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Teaching Portal Listening on port ${port}`);
})