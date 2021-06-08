
const express = require('express')
const app = express()
var router = express.Router();

let connect = require("./connection.js")
let config = require("./config.js")
const { Router } = require('express')
var users =[

  {
    identifiant: 'Jeanbaptistedev',
  }
]

app.get('/', function(req, res, next) {
  res.send('Le coté backend du projet')

})

router.post('/login', function(req, res) {
  let result = users.find(user => user.identifiant == req.body.identifiant);
  if(result){
    res.status(200).send({
      message: "Vous êtes un ancien joueurs, ajouter ou managé vos personnages.."
    })
  }else{
    res.status(200).send({
      message: "Vous êtes un nouveau joueur! créez vos personnage et assignez leurs des objets!"
  })
}

})
module.exports = router;


app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port} !`)
})

