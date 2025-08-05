import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("📩 Webhook recebido:");
  console.log(JSON.stringify(req.body, null, 2));

  res.status(200).send("Recebido com sucesso");
});

app.listen(PORT, () => {
  console.log(
    `🚀 Webhook testando em http://localhost:${PORT || 3000}/webhook`
  );
});

