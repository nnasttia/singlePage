const {src, dest} = require('gulp');
const pug = require('gulp-pug');
const bs = require('browser-sync');

module.exports = function html() {
	return src(['./src/*.pug'])
		.pipe(pug({
			pretty: true
		}))
		.pipe(dest('build'))
		.pipe(bs.stream())
}


