function load() {
  gapi.client.setApiKey('AIzaSyBqSFTqQMR55VSv0ARCB7b_4tzP74mQ42U');
  gapi.client.load('youtube', 'v3', function() {
  	console.log("loaded");
  });
  //console.log(gapi.client.youtube);
}

function makeRequest() {
  var request = gapi.client.youtube.search.list({
    part: 'snippet'
  });
  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  console.log(request);
  });
}