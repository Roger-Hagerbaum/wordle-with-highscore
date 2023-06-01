import express from "express";
import { engine } from "express-handlebars";
import { getRandomWord} from "./utils/randomWord.js";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import {compareWords} from "./utils/compareWords.js";
import  {Highscore} from "./utils/models.js";
import  {connect} from "mongoose";


const app = express();
connect('mongodb://localhost:27017/test');

app.use(cors());
app.use(express.json());

const GAME = [];

app.post("/api/game",  async (req, res) => {
    const data = req.body;
    const word = await getRandomWord(data.length, data.unique);
    console.log(word)
    const game = {
        id: uuidv4(),
        startTime: new Date(),
        guesses: [],
        word: word,
        unique: data.unique,
        length: data.length
    }
    GAME.push(game);
    res.status(201).json({id: game.id});

});

app.post("/api/game/guess", (req, res) => {
    const data = req.body;
    const game = GAME.find((game) => game.id === data.id);
    if(!game){
        res.status(404).end();
    }
    if (game) {
        const checkWord =  compareWords(data.guess, game.word)
        game.guesses.push(checkWord);
        const correctWord = data.guess === game.word;
        if (correctWord) {
            game.endTime = new Date();
            res.status(201).json({correct: true, guesses: game.guesses, game});
        }else
            res.status(201).json({correct: true, guesses: game.guesses});
    }
});

app.post("/api/game/high-score", async (req, res) => {
    const data = req.body;
    const name = req.body.name;
    const game = GAME.find((game) => game.id === data.id);
    if (!game) {
        res.status(404).end();
    }
    if (!game.endTime) {
        res.status(404).end();
    }
    const hs = new Highscore({
        ...game,
        name,
    });
    await hs.save();

    res.status(201).json({
        ...game,
        name,
    });
});

app.get('/api', (req, res) => {
    res.send({ message: 'Yes i am here!' });
});


export default app;
