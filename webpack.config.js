
const path = require('path');

const paths = {
	DIST : path.resolve(__dirname, 'dist'),
	SRCJS : path.resolve(__dirname, 'src/js'),
};

module.exports = {
	entry : path.join(paths.SRCJS, 'index.js'),
	output : {
		path : paths.DIST,
		filename : 'app.js'
	}
}
