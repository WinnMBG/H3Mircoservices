import { mongoose } from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://winn:password@db:27017/', {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('MongoDB Connected')
    } catch (error){
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB;