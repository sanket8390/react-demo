import express from 'express';

const app = express();


app.get('/api/data', (req, res) => {
   const data = [];
   res.send(data);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server at http://localhost:${port}`);
});