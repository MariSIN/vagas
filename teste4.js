const data = require('./fakeData');
const { statusCode } = require('./statusCode');

module.exports = function (req, res) {
	const { id } = req.query;
	const { name, job } = req.body;

	const user = data.find((d) => d.id == id);

	if (!user) {
		return res
			.status(statusCode.notFound)
			.json({ message: 'Usuário não encontrado' });
	}

	user.name = name || user.name;
	user.job = job || user.job;

	return res
		.status(statusCode.ok)
		.json({ message: 'Usuário atualizado com sucesso', user });
};
