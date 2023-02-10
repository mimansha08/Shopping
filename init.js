const fs= require("fs");
const path=require("path")
const data= fs.readFileSync(path.join(__dirname,"server/sample-db.json"));
fs.writeFileSync(path.join(__dirname,"server/db.json"),data);
