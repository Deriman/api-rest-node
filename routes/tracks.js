const express = require("express")
const router = express.Router();

// TODO http://localhost:3001/tracks -> POST, GET, PUT Y DELETE

router.get('/', (req, res) =>{
    const data = ['hola','mundo']
    res.send({ data })
})





module.exports = router;