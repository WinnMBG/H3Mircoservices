import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
    identifiant: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    hash: {
        type: String,
        required: false
    },
})

const User = model('users', usersSchema)

export default User