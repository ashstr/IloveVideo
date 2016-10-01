var loki = require('lokijs');
var Joi = require('joi');
var videoModel = require('./videoModel');

// db.loadDatabase({}, function() {
// 	videoCollection =  db.addCollection('video');
// })


module.exports = function() {

	function DBOP(func) {
		var db = new loki(__dirname + '/../db.json', { autoload: true });
		db.loadDatabase({}, function() {
			videoCollection = db.getCollection('video') ? db.getCollection('video') : db.addCollection('video');
			func(videoCollection, db);
		});
	}

	function getVideos(req, res, next) {
		DBOP(function(videoCollection, db) {
			res.send(videoCollection.find());
		})
	};

	function createVideo(req, res, next) {
		Joi.validate(req.body, videoModel, function(err, val) {
			if (err) {
				throw err;
			}
			DBOP(function(videoCollection, db) {
				var vid = videoCollection.insert(val)
				db.saveDatabase();
				res.send(vid);
			})
		});
	};

	function updateVideo(req, res, next) {
		var selectedVideo = videoCollection.find({ '$loki': req.body.$loki });
		Joi.validate(req.body, videoModel, function(err, val) {
			if (err) {
				throw err;
			}
			DBOP(function(videoCollection, db) {
				var vid = videoCollection.update(req.body);
				db.saveDatabase();
				res.send(vid);
			});
		});
	};

	function deleteVideo(req, res, next) {
		var selectedVideo = videoCollection.find({ '$loki': req.body.$loki });
		Joi.validate(req.body, videoModel, function(err, val) {
			if (err) {
				throw err;
			}
			DBOP(function(videoCollection, db) {
				var vid=videoCollection.get(req.params.id);				
				videoCollection.remove(vid);
				db.saveDatabase();
				res.send();
			});
		});
	};

	function getVideo(req, res, next) {
		var selectedVideo = videoCollection.find({ '$loki': req.body.$loki });
		Joi.validate(req.body, videoModel, function(err, val) {
			if (err) {
				throw err;
			}
			DBOP(function(videoCollection, db) {
				res.send(videoCollection.get(req.params.id));
			});
		});
	};

	return {
		getVideos: getVideos,
		createVideo: createVideo,
		updateVideo: updateVideo,
		deleteVideo: deleteVideo,
		getVideo: getVideo
	};
};
