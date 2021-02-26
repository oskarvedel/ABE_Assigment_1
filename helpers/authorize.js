function authorize(roles = []) {

    if(typeof roles == "string")
    {
        roles = [roles];
    }
    return [
        jwt({secret, algoritms: ['HS256']}),
        (req, res, next) => {
            if(roles.length && roles.includes(req.user.role)){
                return res.status(401).json({message: 'Unauthorized'})
            }
            next();
        }
    ];
}