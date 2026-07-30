class CategoryController {
    create(req,res){
        res.json({
            data : ""
        })

    }

    listAll(req,res){

    }
    fetchDetail(req,res){
        const params = req.params
        const query = req.query
        res.json({
            data : params,
            query : query
        })

    }
    Updatedetail(req,res){

    }
    deleteItem (req,res){

    }


}

const categoryCtrl= new CategoryController()

module.exports= categoryCtrl