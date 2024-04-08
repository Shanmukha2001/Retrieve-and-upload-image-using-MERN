const express = require("express")
const server = express()
const cors = require("cors");
const multer = require("multer")
server.use(express.static("public"))

server.use(express.json())
server.use(cors());

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage })


server.post("/upload",upload.single('file'),(req,res)=>{
    if(!req.file){
        res.status(400).send("No FIle uploaded")
    }
    console.log(req.file.filename);
    res.send("http://localhost:3000/images/"+req.file.filename);
})

server.listen(3000,()=>{
    console.log("server started");
});