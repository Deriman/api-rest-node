const express = require("express");
const fs = require("fs");
const router = express.Router();


const PATH_ROUTES = __dirname;

const removeExtension = (filename) => {
    // TODO tracks.js -> ['tracks','js']
    return filename.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) // TODO users, tracks, storage
    if (name != 'index') {
        router.use(`/${name}`, require(`./${file}`)) // TODO http://localhost:3001/api/tracks
    }
})


module.exports = router;