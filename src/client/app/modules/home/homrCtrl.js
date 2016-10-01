'use strict';
angular.module('ilovevideo').controller('HomeCtrl', function($scope, ilovevideoService) {

	var featchVideos = function() {
		ilovevideoService.getIlovevideos().then(function(videos) {
			$scope.videos.data = videos;
		})
	}
	featchVideos();
	$scope.videos = {
		get: function(index, count, success) {
			var i = index - 1;
			success($scope.videos.data.slice(Math.max(i, 0), i + count));

		},
		data: null
	};



	$scope.$on('vjsVideoReady', function(e, data) {
		data.player.on('ended', function() {
			console.log('content edned');
			jQuery('.mainWindow').css('overflow', 'auto');
		})
		data.player.on('loadeddata', function() {

			console.log('content started');
			jQuery('.mainWindow').css('overflow', 'hidden');
		})
	});
	$scope.item = '';	
	$scope.$watch('item', function(item) {
		jQuery.each(window.videojs.players, function(i, player) {
			player.pause();
		});
		if (item !== "")
			videojs(jQuery('[vidid="'+item.$loki+'"] ').find('.video-js').attr('id')).play();
	}, true);

});
