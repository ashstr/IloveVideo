/* jshint -W117, -W030 */
/**
 *  Demonstrates use of bard's real $http and $q
 *  restoring the ability to make AJAX calls to the server
 *  while retaining all the goodness of ngMocks.
 *
 *  An alternative to the ngMidwayTester
 */

describe('Server: ilovevideoService', function() {
    var ilovevideoService;

    beforeEach(bard.asyncModule('app'));

    beforeEach(inject(function(_ilovevideoService_) {
        ilovevideoService = _ilovevideoService_;
    }));

    describe('when call getVideos', function() {

        it('should get 16 videos', function(done) {
            ilovevideoService.getIlovevideos()
                .then(function(data) {
                    expect(data).to.have.length(16);
                })
                .then(done, done);
        });
        
    });
});
