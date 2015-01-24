<!DOCTYPE html>
<html lang="en">
<head>

<link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.5.0/pure-min.css">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,800,700,600,300' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">

<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

<link rel="stylesheet" href="css/style.css" type="text/css">

	<meta charset="UTF-8">
	<title>unBlock</title>
</head>
<body>
	<div id="header">	
	<h1><i class="fa fa-lightbulb-o"></i> Un<span style="font-weight: 800;">Block</span></h1>
	<h2>An artist's block tool</h2>
	</div>
	<div id="body">
		<form class="pure-form" id="inspoInput">
		    I want a[n]... 
		    <select name="typeOfInspo" id="typeOfInspo">
		    	<option value="adjective">Adjective</option>
		    	<option value="noun">Noun</option>
		    	<option value="verb">Verb</option>
		    </select>
		    <button type="submit" class="pure-button button-inspoInput pure-u-1-2 button-xlarge" id="inspireMe"> Inspire Me!</button>
		 </form>
	</div>
	<div id="word">
		<h3 id="wordName">Bananas</h3>
		<h4 id="wordDefinition">Definition</h4>
		<button type="submit" class="pure-button button-word pure-u-1-3 button-xlarge" id="startOver"><i class="fa fa-arrow-left "></i> Start over </button> <button type="submit" class="pure-button button-word pure-u-1-3 button-xlarge" id="tryAnother"><i class="fa fa-refresh "></i> Try another </button>
	</div>
</body>
<script src="js/findinspiration.js"></script>
</html>