const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		console.log('Connecting to the database, please wait...');

		await mongoose.connect(db, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.log(err.message);
		process.exit();
	}
};

module.exports = connectDB;
