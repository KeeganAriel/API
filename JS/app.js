$(document).ready(function(){
  	$('#search-term').submit(function(event) {
  		event.preventDefault();
  		var userSearch = $('#query').val();
  		getRequest(userSearch);
  	});
});	
  		var getRequest = function(userSearch) {
  			var params = {
  				s: userSearch,
  				r: 'json'
  			};
  			url = 'http://www.omdbapi.com';
  			$.getJSON(url, params, function(data){
			showResults(data.Search);
			console.log(userSearch);
  		});
};

	var showResults = function(results) {
		var html = "";
		$.each(results, function(index, value) {
			html += '<p>' + value.Title + '</p>';
			console.log(value.Title);
			
			// what i did:
			// $('#search-results').append('<p>' + value.Title + '</p>');
		});
		$('#search-results').html(html);

	};
