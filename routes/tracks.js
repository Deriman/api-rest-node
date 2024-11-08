const express = require("express");
const { readItems, readItem, createItem } = require("../controllers/tracks");
const router = express.Router();
const validatorCreateItem = require('../validators/tracks.js')

// TODO http://localhost:3001/tracks -> POST, GET, PUT Y DELETE

router.get('/', readItems);
router.get('/:id', readItem);
router.post('/',  validatorCreateItem, createItem);

module.exports = router;