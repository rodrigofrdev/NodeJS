const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');


const app = express();

// app.engine('hbs', exphbs());
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug'); // Set the view engine to pug
// app.set('views', 'views'); // Set the views folder to views
app.set('view engine', 'ejs'); // Set the view engine to ejs
app.set('views', 'views'); // Set the views folder to views

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // Pug engine
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
