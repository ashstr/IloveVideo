var should = require('should');
var assert = require('assert');
var request = require('supertest');

describe('Routing', function() {
  var url = 'http://localhost:7203/api/videos';
  var insertedID = '';
  var insertedVideo = {};
  before(function(done) {
    console.log("Starting Testing ....");
    done();
  });
  describe('Videos', function() {
    it('should save the video in the array and update the file', function(done) {
      var video = {
        "title": "Clip Title2",
        "thumbnail": "freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg",
        "stream": {
          "protocol": "rtmp",
          "streamer": "fms.edge.cdn.castaclip.net",
          "file": "format_x405/05/17/27_670639_5D01B363-0CE9-ED2E-9C2A05093C20C2B7-500k-mp4.mp4"
        }
      };
      // sedning the todo to our server
      request(url)
        .post('')
        .send(video)
        // end handles the response
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          // check the object and status code
          res.body.should.have.property('$loki');
          res.body.title.should.equal('Clip Title2');
          res.body.thumbnail.should.equal('freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg');
          res.body.stream.streamer.should.equal('fms.edge.cdn.castaclip.net');
          insertedID = res.body.$loki;
          insertedVideo = res.body;
          res.status.should.be.equal(200);
          done();
        });
    });


    it('should check the inserted video title ', function(done) {
      // sedning the todo to our server
      request(url)
        .get('/' + insertedID)
        .send()
        // end handles the response
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          // check the object and status code
          res.body.should.have.property('$loki');
          res.body.title.should.equal('Clip Title2');
          res.body.thumbnail.should.equal('freeze_frame_10/46/95/27_304194_20160613-EM-Sieg-Postings-mp4.jpg');
          res.body.stream.streamer.should.equal('fms.edge.cdn.castaclip.net');
          res.status.should.be.equal(200);
          done();
        });
    });

    it('should update the inserted video title ', function(done) {
      // sedning the todo to our server
      insertedVideo.title = 'strrrrrrrr';
      request(url)
        .put('')
        .send(insertedVideo)
        // end handles the response
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          // check the object and status code

          res.body.should.have.property('$loki');
          res.body.title.should.equal('strrrrrrrr');
          res.body.thumbnail.should.equal(insertedVideo.thumbnail);
          res.body.stream.streamer.should.equal(insertedVideo.stream.streamer);
          res.status.should.be.equal(200);
          done();
        });
    });

    it('should delete the inserted video ', function(done) {
      // sedning the todo to our server      
      request(url)
        .delete('/' + insertedID)
        .send()
        // end handles the response
        .end(function(err, res) {
          if (err) {
            throw err;
          }
          // check the object and status code          
          res.status.should.be.equal(200);
          request(url)
            .get('/' + insertedID)
            .send()
            // end handles the response
            .end(function(err, res) {
              if (err) {
                throw err;
              }
              // check the object and status code
              res.should.be.empty;
              res.status.should.be.equal(200);
              done();
            });
        });
    });

  });
});
