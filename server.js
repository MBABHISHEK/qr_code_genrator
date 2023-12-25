import express from "express";
import cors from "cors";
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/generate-qr", express.json(), (req, res) => {
  const url = req.body.url;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("public/qr_img.png"));

  fs.writeFile("public/URL.txt", url, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    console.log("The file has been saved!");
    res
      .status(200)
      .json({ message: "QR code generated and URL saved successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
