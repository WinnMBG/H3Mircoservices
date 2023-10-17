import { Schema, model } from 'mongoose';

const filmsSchema = new Schema({
    poster_path: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: false
    },
    vote_average:{
        type: Number,
        required: false
    },
    genre_ids: {
        type: [Number],
        required: false
    }
})

const Film = model('filmsFav', filmsSchema)

export default Film