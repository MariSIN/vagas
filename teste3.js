var data = require('./fakeData');
const { statusCode } = require('./statusCode');

module.exports = function (req, res) {
	const { name } = req.query;

	const user = data.findIndex((user) => user.name === name);

	if (user !== -1) {
		data.splice(user, 1);
		return res.status(statusCode.ok).json({ message: 'Usuário deletado' });
	} else {
		return res.status(statusCode.notFound).json({ message: 'Usuário não encontrado' });
	}
};
