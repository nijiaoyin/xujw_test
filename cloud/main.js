require("cloud/app.js")
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

AV.Cloud.define('content_find', function(request, response) {
  var query = new AV.Query('Post');
  query.equalTo('content', request.params.content);
  query.find({
    success: function(results) {
      response.success(results.length);
    },
    error: function() {
      response.error('no such item');
    }
  });
});
