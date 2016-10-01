'use strict';
angular.module('ilovevideo').service('ilovevideoService', function($http, $q, Config) {

	this.getIlovevideos = function() {
		var defer = $q.defer();
		$http.get(Config.API_ENDPOINT + Config.API_ENDPOINT_VIDEOS).success(function(data) {
			data.forEach(function(element) {
				element.sources = [{ 'src': element.stream.protocol+"://"+element.stream.streamer+ '&mp4:' + element.stream.file,'type':'video/flash' }];
				element.poster=element.thumbnail;

			})

			defer.resolve(data);
		}).error(function(e) {
			defer.reject(e);
		});
		return defer.promise;
	}

});
