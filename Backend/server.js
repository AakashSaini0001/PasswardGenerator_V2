const express = require('express');
import generatePassward from './generatePassward';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.get('/', (req, res) => {
    res.render('generatePassward', { generatePassward });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});