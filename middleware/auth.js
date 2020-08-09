const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
	// Get the token from the header
	const token = req.header('x-auth-token');

	// Check if not token
	if (!token) {
		return res.status(401).json({ msg: 'No token, authorization denied' });
	}

	// Verifying the token and extracting the user ID from it
	try {
		// Verifying the token received using the secret key
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		// Adding the user object to the req object
		req.user = decoded.user;

		// Moving on to the next function
		next();
	} catch (err) {
		return res.status(401).json({ msg: 'Token is not valid' });
	}
};
