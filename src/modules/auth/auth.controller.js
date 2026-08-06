 class AuthController{
   loginFunction(req,res){
    const params = req.params
    const query = req.query
    const body = req.body

     // validate

      //login definations
      res.json({
        data : {
          body
        },
        message : "Login successful"
        // query : query
      })
   }

   registerFunction(req,res){
      //register definations
        const body = req.body
        const file = req.file

     // validate
      //login definations
      res.json({
        data : {
          data : req.body,
          file: req.file
        },
        message : "Registered  successfully"
        // query : query
      })
   }
   }
 

 const authCtrl = new AuthController()

 module.exports = authCtrl