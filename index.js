const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const connectDB = require('./config/connectDB')
const router = require('./Routes/index')
    
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

app.use(express.json())


const PORT = process.env.PORT || 3000

app.get('/',(request, response)=> {
    response.json({
        message: 'Hello from server'+ PORT,
    })
})


//API endpoint
app.use('/api', router)




//Connecting the database and run this port
connectDB().then(() => {
   app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
  }) 
})


