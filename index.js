function checkTimer(start, interval, cb) {
	process.nextTick(() => {
		if(interval < 0) {
			cb(new Error('Wrong interval value'), {
				success: false
			})
		}
		var now = Date.now() - start;
		// console.log('Timer: ' + now);
		if(now == interval) {
			// console.log('Mera delay: ' + (now - interval));
			cb(null, {
				success: true
			});
		}
		else if(now < interval){
			checkTimer(start, interval, cb);
		}
		else {
			// console.log(`Mera Delay: ${now - interval}`)
			cb(null, {
				success: false
			})
		}
	})
}

function newTimeout(interval, cb) {
	const start = Date.now();
	checkTimer(start, interval, cb);
}

exports.newTimeout = newTimeout;