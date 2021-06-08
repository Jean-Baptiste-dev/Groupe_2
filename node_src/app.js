
const express = require('express')
const app = express()
var router = express.Router();
const cors=require('cors');
let connect = require("./connection.js")
let config = require("./config.js")
//const { Router } = require('express')
app.use(express.json())
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
};

app.get('/jeu', async (req, res) => {

  let {db_client, db_connection} = await connect()
  
  db_connection.collection('jeu').find({}).toArray((err, result) => {
    if(err) return console.log(err)

    console.log('jeu :', result)

    db_client.close()
    res.send(result)
   
  })
})


app.use(cors(corsOptions));

app.get('/', function(req, res) {
  res.send('Le coté backend du projet')

})

// Page de login et creation d'api

app.post('/login', function(req, res) {
  try {
    const identifiant = req.body
    const jeuR = await  db_connection.collection('jeu').insertOne(identifiant)
    res.status(200).json(jeuR)
} catch (err) {
    console.log(err)
    throw err
}
    
})



app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port} !`)
})
