import multer from "multer";
import path from "path";



const destination = path.resolve("temp");

const storage = multer.diskStorage({
    destination,
    filename: (req, file, callback)=> {
        const uniquePreffix = Date.now();
        const filename = `${uniquePreffix}_${file.originalname}`;
        callback(null, filename);
    }
});




const upload = multer({
    storage,
   
})

export default upload;