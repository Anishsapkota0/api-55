 class AuthController{
   loginFunction(req,res){
      //login definations
      res.json({
        data :"Login"
      })
   }

   registerFunction(req,res){
      //register definations
   }
 }

 const authCtrl = new AuthController()

 module.exports = authCtrl