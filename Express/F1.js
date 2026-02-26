const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/about',(req,res)=>{
    res.send('This is about page');
})

app.listen(3000)

// npm init -y = nodejs application banane ke liye
// npm install express = express module install karne ke liye
// app.listen(3000) = server ko 3000 port pe run karne ke liye
