const express = require("express");
const { readItems, readItem, createItem } = require("../controllers/tracks");
const router = express.Router();

// TODO http://localhost:3001/tracks -> POST, GET, PUT Y DELETE

router.get('/', readItems);
router.get('/:id', readItem);
router.post('/', createItem);

module.exports = router;