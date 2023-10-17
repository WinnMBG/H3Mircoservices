import { mongoose } from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://root:password@localhost:27017/`, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('MongoDB Connected')
    } catch (error){
        console.log(error.message);
        process.exit(1)
    }
}
// mongodb://winn:password@database:27017/
export default connectDB;