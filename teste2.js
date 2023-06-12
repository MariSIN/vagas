const data = require('./fakeData');
const { statusCode } = require('./statusCode');

function postUser(req, res) {
	const { name, job, permissions } = req.body;

	if (!name || !job || !permissions) {
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

	const lastId = data.length > 0 ? data[data.length - 1].id : 0;
	const newId = lastId + 1;

	const newUser = { id: newId, name, job, permissions };

	data.push(newUser);

	console.log(data);
	
	return res.status(statusCode.created).json({ message: 'Usuário criado' });
}

module.exports = { postUser };
