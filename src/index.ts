import * as express from 'express';
import authRouter from "./routes/auth";
import * as cors from "cors";
import { AppDataSource } from "./data-source"

const app = express();
app.use(express.json());
app.use('/oauth', authRouter);
app.use(cors())

AppDataSource.initialize().then(async () => {
    console.log("Database connnected successfully!")
}).catch(error => console.log(error))

app.listen(3000, (err?: Error) => {
    if (err) console.log(err)
    console.log("Server is up");
})