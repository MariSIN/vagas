const data = require('./fakeData');
const countData = require('./fakeDataReadCount');
const { statusCode } = require('./statusCode');

const getUser = (req, res) => {
	const { name } = req.query;

	const user = data.filter((user) => user.name === name);

	if (user.length > 0) {
		countData.readCount[name] = (countData.readCount[name] || 0) + 1;
		return res.status(statusCode.ok).json(user);
	} else {
		return res
			.status(statusCode.notFound)
			.json({ message: 'Usuário não encontrado' });
	}
};

const getUsers = (_req, res) => {
	const user = data.map((e) => e);

	return res.status(statusCode.ok).json(user);
};

module.exports = {
	getUser,
	getUsers,
};
