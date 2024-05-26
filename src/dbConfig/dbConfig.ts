import mongoose from "mongoose";

export default async function connect(){
    try {
        mongoose.connect(process.env.MONGODB_URI!) //! mark is used to tell typescript that it will not be null or undefined
         const connection = mongoose.connection;
         connection.on('connected', () => {
            console.log('MongoDB connected successfully');
         })  
         connection.on('error', (error) => {
            console.log('Something went wrong with the database connection.' + error);
            process.exit();
         }) 

        connection.once('connecting', () => {
            console.log('MongoDB is connecting...');
        });

    } catch (error) {
        console.log('Something went wrong with the database connection.');
        console.error(error);
    }
}