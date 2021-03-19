const express = require('express');


const app = express();


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(__dirname + '/public'))


app.use( (req,res,next) => {

	console.log("Welcome");
	next();

});

app.get('/',(req,res) => {

	res.send("<h1>Getting Root</h1>");
});




app.get('/profile',(req,res) => {

	const user = {
		name: 'Tim',
		Age: '30'
	}
	res.send(user);
});



app.get('/:id',(req,res)=> {

	//console.log(req.query);
	//console.log(req.body);
	//console.log(req.headers);
	console.log(req.params);
	res.status(404).send("Not Found")

});


app.listen('3000');