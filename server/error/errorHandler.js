const errorHandler = (error, req, res, next)=>{
    console.log("From Error Handler", error)
    return res.send(error);
};

export default errorHandler