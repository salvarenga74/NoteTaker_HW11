const express = require('express');
const apiRoutes= require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Port when not using heroku and initialization
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listening PORT
app.listen(PORT, () => console.log(`listening on PORT: ${PORT} 🚀`));