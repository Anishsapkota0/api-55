const bodyValidator = (schema)=>{
    return async (req,res,next)=>{
        try{
      const data = req.body;
      await schema.validateAsync(data, {abortEarly: false})
    }catch(exception){
        //handle

    }
}

}

bodyValidator()

module.exports= bodyValidator

//router.method('/', bodyValidator (checkLogin))