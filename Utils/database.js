import mongoose, { connection } from "mongoose"

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect("mongodb+srv://ayushscs20:ayush@cluster0.jkt3uj0.mongodb.net/?retryWrites=true",
            { dbName: "Portfolio", }
        )
        console.log(`Database connection on ${connection.host}`)
    } catch (error) {
        console.log('Printed Error',error)
    }
}