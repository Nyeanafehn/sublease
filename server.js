
var application_root = __dirname,
		express 				 = require('express');
 		logger  		     = require('morgan');
 		cheerio 		     = require('cheerio');
 		bodyParser 	     = require('body-parser');
 		path						 = require('path');
		request			     = require('request');
		bcrypt 					 = require('bcrypt');
	  session 				 = require('express-session');
	  craigslist			 = require('node-craigslist');

		userRouter  		 = require('./routers/user_router.js'),
		listingRouter 	 = require('./routers/listing_router.js')




var app = express();


app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false }));
app.use( bodyParser.json() );
app.use( express.static( path.join( application_root, 'public' )))
app.use(session({
	secret: 'subleaseking',
	saveUninitialized: false,
	resave: false
}));


app.use('/listings', listingRouter);
app.use('/user', userRouter);


// app.get('/testing', function(req, res){
	
// });


app.listen(3000, function(){
	console.log('Listening off 3000....')
})

