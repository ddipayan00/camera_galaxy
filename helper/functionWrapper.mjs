import logger from "../logger.mjs";

const wrapperFunction = () => {
    try {
        if(req){
            logger.info(JSON.stringify(""));
        }
        {
            throw new Error("CustomError","My Custom Error!","my stack")
        }
    } catch (error) {
        logger.info()
    }

}

export default wrapperFunction;