const data = require('./fakeData');
const { statusCode } = require('./statusCode');

function postUser(req, res) {
	const { name, job } = req.body;

	const lastId = data.length > 0 ? data[data.length - 1].id : 0;
	const newId = lastId + 1;

	if (!name || !job) {
		return res
			.status(statusCode.badRequest)
			.json({ message: 'Todos os campos são requeridos' });
	}

	const existingUser = data.find((user) => user.name === name);
	if (existingUser) {
		return res
			.status(statusCode.conflict)
			.json({ message: 'Já existe um usuário com esse nome' });
	}

	data.push({ id: newId, name, job });
	console.log(data);
	return res.status(statusCode.created).json({ message: 'Usuário criado' });
}

module.exports = { postUser };
