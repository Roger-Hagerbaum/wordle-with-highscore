import mongoose from "mongoose";


const Highscore = mongoose.model('highscores', {
    name: String,
    id: String,
    starTime: Date,
    endTime: Date,
    length: Number,
    unique: Boolean,
    guesses: [
        {
        letter: String,
        result: String,
    },
    ],
});

export {Highscore};
