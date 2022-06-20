require("dotenv").config();
const express = require("express");
const app = express();
const pool = require("./db/conn");
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

// GET ALL POSTS
app.get("/", async (req, res) => {
   try {
      const homePage = await pool.query(
         "SELECT post.*, users.username, users.cohort, users.isstaff FROM post INNER JOIN users ON post.user_id = users.user_id ORDER BY created_at DESC"
      );
      res.json(homePage.rows);
   } catch (err) {
      res.send(err.message);
   }
});

// GET ONE POST
app.get("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      const onePost = await pool.query(
         "SELECT post.*, users.username, users.cohort, users.isstaff FROM post INNER JOIN users ON post.user_id = users.user_id WHERE id = $1",
         [id]
      );
      res.send(onePost.rows[0]);
   } catch (err) {
      res.send(err.message);
   }
});

// POST ONE
app.post("/", async (req, res) => {
   try {
      const { title, body, link, user } = req.body;
      const addPost = await pool.query(
         "INSERT INTO post (title, body, link, user_id) VALUES ($1, $2, $3, $4)",
         [title, body, link, user]
      );
      res.send("Post successfully posted");
   } catch (err) {
      res.send(err.message);
   }
});

// PATCH ONE

// DELETE ONE
app.delete("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      const deletePost = await pool.query("DELETE FROM post WHERE id = $1", [
         id,
      ]);
      res.send("Post successfully deleted");
   } catch (err) {
      res.send(err.message);
   }
});

// Listen and PORT assignment
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
   console.log(`Listening on PORT ${PORT}`);
});
