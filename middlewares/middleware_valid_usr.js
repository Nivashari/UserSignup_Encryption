export const isValid = (req,res, next) =>{
    if(req.session.isValidated){
        next();
    
    }else{
        req.session.error = "you have to login first";
        res.redirect("/login");
    }
};

/* This middleware is added to the dashboard route to restrict invalid user to view dashboard page as below in routes

router.get("/dashboard",isValid,Controller.dashboard_get)

*/