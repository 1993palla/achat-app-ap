//import expres
const express = require ('express');
const app = express();
const port= process.env.PORT || 8000;



//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css' ))
app.use('/js', express.static(__dirname + 'public/js') )
app.use('/images', express.static(__dirname + 'public/images') )
 



//Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req,res)=>{
res.render('index')
})
//Listen on port 8000
app.listen(port, ()=> console.info(`listening a port ${port}`))