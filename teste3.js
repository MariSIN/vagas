var data = require('./fakeData');
const { statusCode } = require('./statusCode');

module.exports = function (req, res) {
	const { name } = req.query;

	const user = data.filter((e) => e.name !== name);

	if (user.length < data.length) {
		data = user;
		return res.status(statusCode.ok).json({ message: 'Usuário deletado' });
	} else {
		return res.status(statusCode.notFound).json({ message: 'Usuário não encontrado' });
	}
};
