require("dotenv").config
const Cloudinaryconfig = {
    cloudName:process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret:process.env.CLOUDINARY_API_SECRET_KEY
}

module.exports= Cloudinaryconfig
