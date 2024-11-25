
import express from 'express'
import path from "node:path";
import url from "node:url";
import messageRoute from "./routes/messageRoute.js";
import "dotenv/config.js";

const app = express()
const PORT = process.env.PORT || 5173;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send(`<h2>Welcome, please head to <a href="/messages">/messages</a></h2>`)
})

app.use("/messages",messageRoute);

app.use('*',(req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})