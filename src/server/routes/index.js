var videos=require('../data/models/video')();

module.exports = function(app) {
    var api = '/api';
    
    app.get(api + '/videos', videos.getVideos);
    app.post(api + '/videos', videos.createVideo);
    app.put(api + '/videos', videos.updateVideo);
    app.delete(api + '/videos/:id', videos.deleteVideo);
    app.get(api + '/videos/:id', videos.getVideo);
};
