
import express from "express";
import mongoose from "mongoose";
import bodyParse from "body-parser";
import dotenv from "dotenv";
import userRoute from "../money-watch/server/routes/userRoute";

const app = express();
dotenv.config({ path: "./.env" });

app.use(bodyParse.json());
app.use("/api/v1/moneywatch", userRoute);


app.use('/', (req, res) => {
     res.status(200).send({
        statu: 200,
        message: "this route doesn't exist"
    })
})

const databaseUrl = process.env.DATABASE
mongoose.connect(databaseUrl, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false }).then(() => { 
        console.log("db successfully connected") 
    })
const port = process.env.PORT;




app.listen(port, () => {

    console.log(`sever is running on port ${port}`);
})

export default app;
