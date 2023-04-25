import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "ERRO DO BANCO"))

db.once('open',()=>{
    console.log("Conexão realizada com sucesso")
})

const app = express()

app.use(express.json())

const livros = [
    {id:1, title:"Senho dos aneis"},
    {id:2, title:"Hobit"},
]

app.get("/", (req,res)=>{
    res.status(200).send("Curso de node")
})

app.get("/livro", (req,res)=>{
    res.status(200).json(livros)
})
app.get("/livro/:id", (req,res)=>{
    let index = buscaLivro(req.params.id)
    res.status(201).json(livros[index])
})

app.post("/livro", (req,res)=>{
    livros.push(req.body)
    res.status(201).json(livros)
})

app.put("/livro/:id", (req,res)=>{
    let index = buscaLivro(req.params.id)
    livros[index].title = req.body.title
    res.status(201).json(livros)
})

app.delete("/livro/:id", (req,res)=>{
    let index = buscaLivro(req.params.id)
    livros.splice(index,1)
    res.status(201).json(livros)
})

function buscaLivro(id){
    return livros.findIndex(el=> el.id == id)
}

export default app;