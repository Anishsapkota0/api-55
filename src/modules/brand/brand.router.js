const brandRouter = require("express").Router()
const brandCtrl = require("./brand.controller")
brandRouter.post("/",brandCtrl.create)

brandRouter.get('/',brandCtrl.listAll)
brandRouter.get('/:id',brandCtrl.fetchDetail)
brandRouter.put('/:id',brandCtrl.Updatedetail)

brandRouter.delete('/',brandCtrl.deleteItem)
 
module.exports= brandRouter