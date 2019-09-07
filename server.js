
const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 8080;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require(path.join(__dirname, 'app', 'routing', 'htmlRoutes')));
app.use('/api', require(path.join(__dirname, 'app', 'routing', 'apiRoutes')));



app.listen(PORT, function () {

    console.log('Server listening on: http://localhost:' + PORT);
});