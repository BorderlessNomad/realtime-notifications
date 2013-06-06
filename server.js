try {
	var io = require('socket.io').listen(8080);

	io.enable('browser client minification'); 	// send minified client
	io.enable('browser client etag'); 			// apply etag caching logic based on version number
	io.enable('browser client gzip'); 			// gzip the file
	io.set('log level', 2);

	var pres = io.of("/notification").on('connection', function (socket) {

		// Clients need to send a "user" message to identify themselves...
		socket.once("user", function (user) {
			try {
				// Make sure we have the data we need...
				if (user == null || (user.id || null) == null) {
					return;
				}

				// Join the user to their own private channel so we can send them notifications...
				socket.join(user.id);
			} catch (e) {
				console.log(e);
			}
		});

		// We can now "push" information to the user from any process that can connect to this service...
		socket.on("push", function (data) {
			try {
				// Make sure we have the data we need...
				if (data == null || (data.id || null) == null) {
					return;
				}
				console.log(data);

				// Let's clean up the data a little (we don't need to tell the user who they are)
				var channel = data.id;

				var publish = data.publish;
				publish['user'] = channel;

				delete data.id;

				// Now we will braodcast the data only to the user's private channel...
				socket.broadcast.to(channel, data).emit("update", publish);
			} catch (e) {
				console.log(e);
			}
		});
	});
} catch (e) {
	console.log(e);
}