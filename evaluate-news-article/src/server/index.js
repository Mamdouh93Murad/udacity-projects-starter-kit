// TODO: Configure the environment variables
require('dotenv').config()


const mockAPIResponse = require('./mockAPI.js')

//const PORT = 8081


// TODO add Configuration to be able to use env variables
const PORT = process.env.PORT
const key = process.env.API_KEY
const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

// TODO: Create an instance for the server
const express = require('express');
const app = express();
app.use(express.static("dist"));
// TODO: Configure cors to avoid cors-origin issue

// TODO: Configure express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const axios = require("axios");
// TODO: Configure express static directory.
const cors = require('cors');
app.use(cors());

// Start up an instance of app



app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
   // res.sendFile(path.resolve('src/client/views/index.html'))
   console.log('APP GET')
})
// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-url', async (req, res) => {
    try {
        /* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: '',
       score_tag : '',
       agreement : '',
       subjectivity : '',
       confidence : '',
       irony : ''
     }
  */
     const url = req.body.url
     var api_url = `${BASE_API_URL}?key=${key}&url=${url}&lang=en`
     const sample = await axios(api_url);
     res.send({
        agreement : sample.data.agreement,
        subjectivity: sample.data.subjectivity,
        irony: sample.data.irony,
        confidence: sample.data.confidence,
        score_tag: sample.data.score_tag,
        text: sample.data.sentence_list.text,
    });
    console.log('APP POST')

    } catch (error) {
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
    console.log('APP GET TEST')
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
