import express, {Express} from "express";
const bodyParser = require('body-parser')

const router = require('./router');

const cors = require('cors');

const port = "8000";

const app: Express = express();
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));
app.use(router);

app.listen(port, () => {
    console.log(`now listening on port ${port}`)
})