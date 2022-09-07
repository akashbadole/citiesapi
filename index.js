const express = require('express');
// const Joi = require('joi');
const cors = require("cors");
const app = express();

app.use(express.json());

const citiesData = require("./citydata.json") 

//Read Request Handlers
app.get('/', (req, res) => {
    res.send('welcome to Indian city - getting JSON format - Akash Badole<br>total 1220 cities</br>');
}
);

app.get('/cities', (req, res) => {
    res.send(citiesData);
});


app.get('/cities/:id', (req, res) => {
    // Reading id from the data
    const id = req.params.id;

    // Searching city for the id
    for (let city of citiesData) {
        if (city.id === id) {
            res.json(city);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('city not found');
});


//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));