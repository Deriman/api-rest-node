const { storageModel } = require('../models')

const readItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send({ data })
}
const readItem = (req, res) => {}
const createItem = async (req, res) => {
    const { file } = req
    const fileData = {
        filename: file.filename,
        url:`${process.env.PUBLIC_URI}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({ data })
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