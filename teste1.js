const data = require('./fakeData');
const countData = require('./fakeDataReadCount');
const { statusCode } = require('./statusCode');

const getUser = (req, res, next) => {
	const { name } = req.query;

	const user = data.filter((user) => user.name === name);

	if (user.length > 0) {
		countData.readCount[name] = (countData.readCount[name] || 0) + 1;
		res.status(statusCode.ok).json(user);
	} else {
		res.status(statusCode.notFound).json({ message: 'Usuário não encontrado' });
	}
};

const getUsers = (req, res, next) => {
	const user = data.map((e) => e);

	res.status(statusCode.ok).json(user);
};

module.exports = {
	getUser,
	getUsers,
};
