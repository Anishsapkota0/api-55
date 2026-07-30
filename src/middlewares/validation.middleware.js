const bodyValidator = (schema)=>{
    return async (req,res,next)=>{
        try{
      const data = req.body;
      if (!data){
        throw {code : 422 , message : " Data required", status : "Empty_Payload"}
      }
      console.log(data)
    //   console.log(data)
     let result = await schema.validateAsync(data, {abortEarly: false})
    //  console.log(result)


    }catch(exception){
        console.log(exception)
        //handle
        next(exception)

    }
    
}

}

bodyValidator()

module.exports= bodyValidator

//router.method('/', bodyValidator (checkLogin))