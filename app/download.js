import fs from "fs";
import path from "path";

export default function handler(req, res) {
  console.log("banana received");
  const contentTypeMap = {
    csv: "text/csv",
    svg: "image/svg+xml",
    ico: "image/x-icon",
    png: "image/png",
    jpg: "image/jpeg",
    pdf: "application/pdf",
  };
  const filePath = path.join(process.cwd(), "src/db", "Idaho.csv");
  const fileName = "Idaho.csv";
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("file not found");
  }
  const fileExtension = fileName.split(".").pop().toLowerCase();
  const contentType =
    contentTypeMap[fileExtension] || "application/octet-stream";
  res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
  res.setHeader("Content-Type", contentType);
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}