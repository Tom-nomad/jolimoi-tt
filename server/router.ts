import express, {Request, Response, Router} from "express";
const {convertIntToRoman} = require('./services/ConversionService')

const router: Router = express.Router();

router.use(express.urlencoded({
    extended: true,
}));
let result:String;
let convertedNumber:any;

router.get("/convertNumberToRoman/setResult", (req: Request,res: Response) => {
    try {
        let numberToConvert = req.query.numberToConvert;
        result = convertIntToRoman(numberToConvert);
        convertedNumber = numberToConvert;
        return res.send({})
    } catch (e: unknown) {
        console.log(e)
        if (typeof e === "string") {
            console.log(e.toUpperCase())
        } else if (e instanceof Error) {
            console.log(e.message) 
        }
        throw new Error('An error occurred');
    }
   
})

router.get("/convertNumberToRoman/sse", (req: Request,res: Response) => {
    try {
        res.setHeader("Content-Type", "text/event-stream");
        const sseResult = {
            result,
            convertedNumber,
        }
        return res.write(`data: ${JSON.stringify(sseResult)}\n\n`)
    } catch (e: unknown) {
        console.log(e)
        if (typeof e === "string") {
            console.log(e.toUpperCase())
        } else if (e instanceof Error) {
            console.log(e.message) 
        }
        throw new Error('An error occurred');
    }
   
})

module.exports = router;
