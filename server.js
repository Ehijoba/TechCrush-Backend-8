const express = require("express");
const { saveUrl, getLongUrl } = require("./utils/url.utils");

const app = express();

app.use(express.json());

app.post("/shorten", async (req, res) => {
  const { url } = req.body;

  const code = await saveUrl(url);

  res.json({ short: `http://localhost:3000/s/${code}` });
});

app.get("/s/:code", async (req, res) => {
  const longUrl = await getLongUrl(req.params.code);

  if (!longUrl) return res.status(404).send("Not found");

  res.redirect(longUrl);
});

app.listen(3000, () => console.log("Server running on port 3000"));
