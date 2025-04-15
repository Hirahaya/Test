// replace.js
const fs = require("fs");

const htmlPath = "index6.html";
// const distPath = "dist/index.html"; // 出力先

const authKey = process.env.TAILSCALE_KEY;

let html = fs.readFileSync(htmlPath, "utf-8");
html = html.replace(/__TAILSCALE_KEY__/g, authKey);
fs.mkdirSync("dist", { recursive: true });
// fs.writeFileSync(distPath, html);
fs.writeFileSync(htmlPath, html);
