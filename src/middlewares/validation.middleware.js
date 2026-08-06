const joi = require("joi")

const bodyValidator = (schema)=>{
    return async (req,res,next)=>{
        try{
      const data = req.body;
      if (!data){
        next({code : 422 , message : " Data required", status : "Empty_Payload"})
      }
      console.log(data)
    //   console.log(data)
     let result = await schema.validateAsync(data, {abortEarly: false})
    //  console.log(result)
   
    next()

    }catch(exception){
        let messagebag = {}
        if (exception instanceof joi.ValidationError){
            exception.details.map((error)=>{
                messagebag[error.path.pop()]=error.message
            })

        }
        // console.log(exception)
        //handle
        next({code: 400, detail : messagebag, status: " Validaton_Error"})

    }
    
    
}

}
bodyValidator()

module.exports= bodyValidator

//router.method('/', bodyValidator (checkLogin))