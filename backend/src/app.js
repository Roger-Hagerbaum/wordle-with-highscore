import express from "express";
import { engine } from "express-handlebars";
import cors from "cors";


const app = express();

app.use(cors());


app.get('/api', (req, res) => {
    res.send({ message: 'Yes i am here!' });
});


export default app;
