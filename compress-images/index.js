import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

(async function(){
	console.log("Processing ...");

	const files = await imagemin(['images/*.{jpg,png}'], {
		destination: 'result/',
		plugins: [
			imageminMozjpeg(),
			imageminPngquant({
				quality: "60-80"
			})
		]
	});

	console.log(files);
	console.log("End");
})();