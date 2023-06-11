var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    
    var { name } =  req.query;

    const user = data.filter((user) => user.name === name);

    if(user.length > 0) {
        res.status(200).json(user)
    } else {      
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
};

const getUsers = ( req, res, next ) => {

    const user = data.map((e) => e)
    
    res.status(200).json(user)
    
};

module.exports = {
    getUser,
    getUsers
};