$(document).ready(function(){

	function findWord(typeofInspo){
		var typeofInspo = $('#typeOfInspo').val();
		var wordURL = "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech="+typeofInspo+"&minCorpusCount=0&maxCorpusCount=500&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=LOLNAH";

  		$.ajax({
			url: wordURL,
			dataType:  "jsonp",
			success:function(randWord){
				console.log(typeofInspo);
				console.log(wordURL);
				var thisWord = randWord.word;
				var defURL = "http://api.wordnik.com:80/v4/word.json/"+thisWord+"/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=LOLNAH"; 
				var thisDef = "";
				$('#wordName').text(thisWord);
				$('#body').slideUp(200);
				$('#word').slideDown(200);

				$.ajax({
					url: defURL,
					dataType:  "jsonp",
					success:function(def){
						thisDef =  def[0].text;
						$('#wordDefinition').text("("+typeofInspo+") "+thisDef);
					}
				});
			}
		});
	};

	$('#word').hide();

	$('#inspireMe').click(function() {
		event.preventDefault();
		findWord($('#typeOfInspo').val());
	});

	$('#startOver').click(function()
	{	
		console.log("start over button clicked");
		$('#word').slideUp(200);
		$('#body').slideDown(200);
	});

	$('#tryAnother').click(function()
	{	
		console.log("try another button clicked");
		findWord();
	});

});