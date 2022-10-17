const express =require('express') ;
const { engine } =require('express-handlebars') ;
const products = require('./product.json')

const app = express();

const PORT = process.env.PORT || 4444

app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.use(express.static('public'))

app.set('views', './views');


app.get('/',(req,res)=>{
    res.render('home',{cssFileName: 'products' , pageTitle: 'Главная'})
})

app.get('/about',(req,res)=>{
    res.render('about',{ cssFileName: 'products', pageTitle: 'О нас'})
})

app.get('/products',(req,res)=>{
    res.render('products',{ products, cssFileName: 'products', pageTitle: 'Товары' })
})

app.get('/product/:productId',(req,res)=>{
    const product = products.find(p => p.id === req.params.productId)

    res.render('product',{ product,cssFileName: 'products' ,pageTitle: 'Товар'})
})

app.listen(PORT,()=>{
    console.log(`Application service is running on port ${PORT}`)
})