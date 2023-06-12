const countData = require("./fakeDataReadCount");

module.exports = function(req, res){
    const { name } =  req.query;

    const readCount = countData.readCount[name] || 0;

   return res.send(`Usuário ${name} foi lido ${readCount} vezes.`);

};