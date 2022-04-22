const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000 ;

app.use(cors());
app.use(express.json());

const uri = process.env.MongoDB_URI;
mongoose.connect( uri, { useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log('connection successful')
})

const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');


app.listen(port, ()=>{
  console.log('server is running on port:',port);
})

app.use('/login', loginRouter);
app.use('/users', usersRouter);