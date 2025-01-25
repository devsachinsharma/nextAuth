import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect("");

        const connection = mongoose.connection

        connection.on("connected", () => {
            console.log("MongoDb connected");
        });

        connection.on("error", (err) => {
            console.log("MongoDb connection error." + err);
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
    }
}