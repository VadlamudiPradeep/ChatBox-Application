const bodyParser = require('body-parser')
const fs = require('fs');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req ,res)=>{
fs.readFile('username.txt',(err , data)=>{
if(err){
    console.log(err)
  
}

res.send(
`${data}<form action="/" method="POST" onSubmit="document.getElementById('username').value='localStorage.getItem('username')'">
<input type="text" name="username" id="message" placeholder="message...." >
<input type="hidden-text" name="message" id="username" placeholder="username...."> 
<button type="submit">SEND</button>
</form>`
  );

 })
 });
 
app.post('/',(req, res , next)=>{
    console.log(req.body.username);
    console.log(req.body.message);
    fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`, (err)=>{
    if(err){
        console.log(err);
    }
    res.redirect('/');
    })

})
app.get('/login',(req ,res , next)=>{
    res.send(
        `<form action='/login' method="POST" onSubmit="localStorage.setItem('username',document.getElemtById('username').value)"
        action='/product' methid='POST' > 
        <input id='username' type='text' name='title'>
        <button type='submit'>Add</button>
        </form>`
    )
})
app.listen(3000);
