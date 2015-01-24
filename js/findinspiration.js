$(document).ready(function(){
	$('#word').hide();
	
	$('#inspireMe').click(function() {
		event.preventDefault();
		var typeofInspo = $('#typeOfInspo').val();
		var wordURL = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech="+typeofInspo+"&minCorpusCount=0&maxCorpusCount=500&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

  		$.ajax({
			url: wordURL,
			dataType:  "jsonp",
			success:function(data){
				console.log(typeofInspo);
				console.log(wordURL);
				$('#body').slideUp(200);
				$('#word').slideDown(200);
			}
		});
	});

	$('#startOver').click(function()
	{	
		console.log("start over button clicked")
	});

	$('#tryAnother00').click(function()
	{	
		console.log("start over button clicked")
	});

});