describe('home controller', function() {
    var controller;
    var videos = mockData.getIlovevideos();
    var scope;
    beforeEach(function() {
        bard.appModule('ilovevideo');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'ilovevideoService');
    });

    beforeEach(function() {
        sinon.stub(ilovevideoService, 'getIlovevideos').returns($q.when(videos));
        scope = $rootScope;
        controller = $controller('HomeCtrl', { $scope: scope });
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('HomeCtrl controller', function() {
        it('should be created successfully', function() {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have called ilovevideoService.getIlovevideos 1 time', function() {
                expect(ilovevideoService.getIlovevideos).to.have.been.calledOnce;
            });
            it('should have 5 videos', function() {                
                expect(scope.videos.data).to.have.length(5);
            });
        });
    });
});
