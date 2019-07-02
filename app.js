const express = require('express');
const app = express();
const port = 3000;

var path = require('path');





app.use(express.urlencoded())
app.use('/css', express.static(path.join(__dirname, 'css')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/data', express.static(path.join(__dirname, 'json')))
app.use('/images', express.static(path.join(__dirname, 'images')))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});
/*
app.get('/api/reports/expense/:month/:year',(req,res)=>{
  //req.params.month
  //req.params.year
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM expenses", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
});
*/
app.post('/login',(req,res)=>{
    let username = req.body.uname;
    let password = req.body.pass;
    if(username === "jamie" && password === "123qwe"){
        //res.sendFile(path.join(__dirname + '/home.html'));
        res.redirect('/home');
    }else{
        res.redirect('/?err=9001');
    }
});

app.listen(port);