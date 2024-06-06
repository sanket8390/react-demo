import express from 'express';

const app = express();

// app.get('/', (req,res) => {
//    res.send('Server is ready');
// });

app.get('/api/data', (req, res) => {
   const data = [
      {
         id: 1,
         name: 'Sanket bhawar',
         email: 'sanket@gmail.com'
      },
      {
         id: 2,
         name: 'Sagar shelke',
         email: 'sagar@gmail.com'
      }
   ];
   res.send(data);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Server at http://localhost:${port}`);
});