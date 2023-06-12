const data = require('./fakeData');
const { statusCode } = require('./statusCode');

const checkNamePermissions = (req, res, next) => {
	const { name } = req.query;

	const user = data.find((user) => user.name === name);

	if (!user) {
		return res
			.status(statusCode.notFound)
			.json({ message: 'Usuário não encontrado' });
	}

	if (
		!user.permissions.includes('delete')
	) {
		return res
			.status(statusCode.forbidden)
			.json({ message: 'Permissão negada' });
	}
	next();
};

const checkIdPermissions = (req, res, next) => {
	const { id } = req.query;

	const user = data.find((user) => user.id === +id);

	if (
		!user.permissions.includes('update')
	) {
		return res.status(statusCode.forbidden).json({ message: 'Permissão negada' });
	}

	next();
};

module.exports = { checkNamePermissions, checkIdPermissions };
