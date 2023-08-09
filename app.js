const http= require("http")


const server= http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("[]")
        res.end()
    } else if(req.url=="/clrs"){
      res.write("['red','yellow','blue']")
      res.end()
    }



})
server.listen(5050)
console.log("Server is running on 5050...")