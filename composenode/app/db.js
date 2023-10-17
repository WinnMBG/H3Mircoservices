import { mongoose } from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@database:27017/`, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('MongoDB Connected')
    } catch (error){
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB;