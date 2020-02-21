/**
 * ChatController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	join: function (req, res) {
		sails.sockets.join(req, 'funsockets');
		return res.ok();
	},
	chat: function (req, res) {
		sails.sockets.broadcast('funsockets', 'chat', req.body);
		return res.ok();
	},

	repeat: function (req, res) {

		var func = function () {
			var date_ob = new Date();
			var timeStr = date_ob.getHours() + ':' + date_ob.getMinutes() + ':' + date_ob.getSeconds() + ':' + date_ob.getMilliseconds();
			sails.sockets.broadcast('funsockets', 'time', {time:timeStr});
		}

		setInterval(func, 1000);
		return res.ok();
	}

};

