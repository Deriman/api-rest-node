const { trackModel } = require('../models')

const readItems = async (req, res) => {
    const data = await trackModel.find({})
    res.send({ data })
}
const readItem = (req, res) => {}
const createItem = async (req, res) => {
    const body = req.body;
    const data = await trackModel.create(body)
    res.send({ body })
}
const updateItem = (req, res) => {}
const deleteItem = (req, res) => {}


module.exports = {
    readItem,
    readItems,
    createItem,
    updateItem,
    deleteItem
}