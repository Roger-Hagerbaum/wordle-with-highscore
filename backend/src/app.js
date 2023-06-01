import express from "express";
import { engine } from "express-handlebars";
import { getRandomWord} from "./utils/randomWord.js";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";


const app = express();

app.use(cors());
app.use(express.json());

const GAME = [];

app.post('/api/game', async (req, res) => {
    const data = req.body;
    const word = await getRandomWord(data.length, data.unique);
    console.log(word)
    const game = {
        id: uuidv4(),
        startTime: new Date(),
        word: word,
        unique: data.unique,
        length: data.length
    }
    GAME.push(game);
    res.status(201).json({id: game.id});

});
app.get('/api', (req, res) => {
    res.send({ message: 'Yes i am here!' });
});


export default app;
