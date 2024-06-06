const express = require('express')
const app = express()
const cors  = require('cors')
app.use(cors())
app.use(express.json())
app.post('/api/form',async(req,res) =>{
   console.log(req.body,'form data')
   return res.json({
      message: 'Form submitted successfully'
   })
})


app.listen(5454,() =>{
   console.log('server started')
})