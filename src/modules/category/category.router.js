const categoryRouter = require("express").Router()
const categoryCtrl = require("./category.controller")
const checkLogin = require("../../middlewares/auth.middleware")


categoryRouter.post("/",checkLogin,categoryCtrl.create)

categoryRouter.get('/',categoryCtrl.listAll)
categoryRouter.get('/:id',categoryCtrl.fetchDetail)
categoryRouter.put('/:id',checkLogin,categoryCtrl.Updatedetail)

categoryRouter.delete('/:id',checkLogin,categoryCtrl.deleteItem)
 
module.exports= categoryRouter