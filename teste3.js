var data = require('./fakeData');
const { statusCode } = require('./statusCode');

module.exports = function (req, res) {
	const { name } = req.query;

	const user = data.filter((e) => e.name !== name);

	if (user.length < data.length) {
		data = user;
		res.status(statusCode.ok).json({ message: 'Usuário deletado' });
	} else {
		res.status(statusCode.notFound).json({ message: 'Usuário não encontrado' });
	}
};
