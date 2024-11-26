import express from 'express';
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app)

app.listen(3000, () => {
  console.log("MATRIX INICIADA...");
});

/*
const posts = [
  {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 2,
      descricao: "Paisagem deslumbrante",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 3,
      descricao: "Cachorro fofo",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 4,
      descricao: "Comida deliciosa",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 5,
      descricao: "Citações inspiradoras",
      imagem: "https://placecats.com/millie/300/150"
  },
  {
      id: 6,
      descricao: "Gráfico de dados",
      imagem: "https://placecats.com/millie/300/150"
  }
];
*/

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);    
});

app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const initiallength = posts.length;

  posts = posts.filter(p => p.id !== id);

  if (posts.length < initiallength) {
    res.status(200).json({ message: "Post removido com sucesso" });
    } else {
        res.status(404).json({ message: "Post não encontrado" });
    }    
});

app.get("/usuarios", (req, res) => {
    res.status(200).send(
        [
            {
              "nome": "Alice",
              "idade": 30,
              "email": "alice@email.com"
            },
            {
              "nome": "Bruno",
              "idade": 25,
              "email": "bruno@email.com"
            }
          ]
    )
}); 
