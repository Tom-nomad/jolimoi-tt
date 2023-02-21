import express, {Request, Response, Router} from "express";
const {intToRomanMap} = require("../config/conversion.js")
const router: Router = express.Router();

router.use(express.urlencoded({
    extended: true,
}));

router.post("/convertNumberToRoman", (req: Request,res: Response) => {
    try {
        let numberToConvert = req.body.numberToConvert;

        let result: String = "";

        for (const key of Object.keys(intToRomanMap)) {
          const repeatCounter = Math.floor(numberToConvert / intToRomanMap[key]);
          numberToConvert -= repeatCounter * intToRomanMap[key];
          result += key.repeat(repeatCounter);
        }
        return res.send({
            result: result,
            convertedNumber: req.body.numberToConvert,
        })
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
