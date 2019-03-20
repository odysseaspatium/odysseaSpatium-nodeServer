var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');

var Voyage=require('./routes/VoyageRoute');
var Panier = require('./routes/PanierRoute');
var Commentaire = require('./routes/CommentaireRoute');
var Article=require('./routes/ArticleRoute');
var HistoriqueCommentaireRoute=require('./routes/HistoriqueCommentaireRoute');
var HistoriquePanierRoute=require('./routes/HistoriquePanierRoute');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/Voyage',Voyage);
app.use('/Panier',Panier);
app.use('/Commentaire',Commentaire);
app.use('/Article',Article);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
  
});
// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// development error handler
// will print stacktrace


// production error handler
// no stacktraces leaked to user
app.use(function(err, res) {
        res.status(err.status || 500);
        res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;