const cloudinary = require("cloudinary").v2

const Cloudinaryconfig = require("../config/app.config")

const fs = require("fs")

class CloudinaryServices{
    constructor(){
        cloudinary.config({
            cloud_name:Cloudinaryconfig.cloudName,
            api_key : Cloudinaryconfig.apiKey,
            api_secret: Cloudinaryconfig.apiSecret

        })
    }

    async singleFileUpload(filePath, dir = '/'){
try{
    //file Upload
        const response = await cloudinary.uploader.upload(filePath,{
            folder : "/api-55"+dir,
            format : "auto",
            unique_filename: true
        })

        //thumbnail for file
        const optimize = cloudinary.url(response.public_id,{
            transformation :[
                {quality : "auto",aspect_ratio :"1.0",width:1024},
                {fetch_format : "auto"}
            ]
        })

        //local file delete
        fs.unlinkSync(filePath)

        //return to the client
        return {
            publicID : response.public_id,
            url : response.secure_url,
            optimizeUrl :optimize
        }
    }catch(exception){

        console.log("cloudinary",exception)

        throw {code : 500, messagge : "Cloudinary file upload failed ", status : "CLOUDINARY_FILE_ERROR"}


    }

    }

}


module.exports= new CloudinaryServices()