var express = require('express');
var app = express();
var logger = require('morgan');
var front = require('./routes/front')

app.set('port', process.env.port || 3000)
app.set('view engine','ejs')

app.use(logger('dev'))
app.use('/public',express.static(__dirname + '/public'))

app.get('/',function(req,res) {
    res.send('Server is running on port ' + app.get('port'));
});

app.get('/express',front.home)
app.get('/express/about',front.about)
app.get('/express/post',front.post)
app.get('/express/contact',front.contact)

app.listen(app.get('port'),function() { 
    console.log('Server is running on port '+ app.get('port'));
});