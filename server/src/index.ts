import express from "express";
import { prisma } from "./prisma";

const app = express();

app.get("/", async (req, res) => {
  res.send(await prisma.object.findFirst());
});

app.listen(6001, () => {
  console.log("Server is running on port 6001");
});
