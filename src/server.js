import express from "express";
import bodyParser from "body-parser";

const app = express();

const postsInfo = {
  "first-post": { upvotes: 0 },
  "second-post": { upvotes: 0 },
  "third-post": { upvotes: 0 },
};

// to access req body
app.use(bodyParser.json());

app.get("/hello", (req, res) => res.send("HEY"));

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`HEY ${name}`);
});

// app.post("/hello", (req, res) => {
//   const name = req.body.name;
//   console.log("DEB: ", req.body);
//   res.send(`Hello ${name}`);
// });

// Upvote post
app.post("/api/posts/:name/upvote", (req, res) => {
  const postName = req.params.name;
  postsInfo[postName].upvotes++;

  res.status(200).send(`Success! ${postsInfo[postName].upvotes}`);
});

app.listen(8000, () => {
  console.log("Server listening...");
});
