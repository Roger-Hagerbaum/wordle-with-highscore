import express from "express";
import { engine } from "express-handlebars";
import { getRandomWord} from "./utils/randomWord.js";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import {compareWords} from "./utils/compareWords.js";
import  {Highscore} from "./utils/models.js";
import  {connect} from "mongoose";


const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set('views', "templates");

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
    console.log(game);
    GAME.push(game);
    res.status(201).json({id: game.id});

});
app.get("/api/info", (req, res) => {
    res.render("info");

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
    console.log(game);
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
    console.log(hs);
    res.status(201).json({
        ...game,
        name,
    });
});

app.get("/api/high-score", async (req, res) => {
    const wordLength = req.query.wordLength ? parseInt(req.query.wordLength): undefined;
    const unique = req.query.unique;

    const hs = await Highscore.find()
    ;
    const filter = hs.filter((hS) => {
        if(wordLength === undefined){
            return false
        }else if(wordLength && hS.length !== wordLength) {
            return false
        }if(unique === undefined){
            return false
        }else if(unique.unique === true && !hS.unique) {
            return false
        }else if (unique.unique === false && hS.unique){
            return false
        }
        return true

    });
    res.render("highscore", {hs:filter.map((hs) => ({
            name: hs.name,
            wordLength: hs.length,
            unique: hs.unique,
            duration: (hs.endTime.getTime() - hs.startTime.getTime()) / 1000,
        })) });

});


export default app;
