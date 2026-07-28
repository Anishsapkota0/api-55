const categoryRouter = require("express").Router()
const categoryCtrl = require("./category.controller")

categoryRouter.post("/",categoryCtrl.create)

categoryRouter.get('/',categoryCtrl.listAll)
categoryRouter.get('/:id',categoryCtrl.fetchDetail)
categoryRouter.put('/:id',categoryCtrl.Updatedetail)

categoryRouter.delete('/',categoryCtrl.deleteItem)
 
module.exports= categoryRouter