import mongoose from "mongoose";


const Highscore = mongoose.model('highscores', {
    name: String,
    id: String,
    startTime: Date,
    endTime: Date,
    wordLength: Number,
    unique: Boolean,
    guesses: [
        {
        letter: String,
        result: String,
    },
    ],
});

export {Highscore};
