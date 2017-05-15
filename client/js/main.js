$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
	function postData() {
		var tweet = {
			text : $('#tweet-input').val(),
			userName: $('#user-input').val()
		};
		$.ajax({
			url: 'http://localhost:3000/messages',
			type: 'POST',
			data: JSON.stringify(tweet),
			datatype: JSON
		}).then(function(result) {
			var textArea = document.getElementById('past-tweets');
			var user = document.createElement('p');
			var tweet = document.createElement('div');
			var btn = document.getElementByClassName('btn');
			btn.addEventListener('click', submitTweet);
				submitTweet function(){

				}
			tweetDiv.innerText = tweet.text;
			user.innerHTML = tweet.userName;
			tweetDiv.appendChild(user);
			$(postDiv).prepend(tweetDiv);
		}, function(err) {
			alert("Could not Post! That! Tweet!  Try to Post! That! Tweet! again.")
		});
	}

		// $.ajax({
		// 	url: 'http://localhost:3000/',
		// 	type: 'POST',
		// data: JSON.stringify(tweet)
		// })
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
			2) After posted prepend message to list of messages and clear input box */
	

	function getData() {
		$.ajax ({
            url:  "http://localhost:3000/messages",
            method: 'GET'
        }).then(function(result){
            console.log(result.length);
            var arrayString = result.split("\n"); 
            var parsedArray = [];
            
            //LOOP THROUGH JSON ARRAY AND PARSE
            for (var i = 0; i < arrayString.length - 1; i++){ //subtract the length of the array by 1 because the least element is a blank space
                parsedArray.push(JSON.parse(arrayString[i]));
            };
            
            var reversedArray = parsedArray.reverse();
            //LOOP THROUGH REVERSED PARSED ARRAY AND APPEND TO PAGE
            for(var i = 0; i < reversedArray.length; i++){
                var tweetText = reversedArray[i];
                var twitDiv = document.getElementById('past-tweets');
                var tweet = document.createElement('div');
                var user = document.createElement('p');
                tweet.innerText = tweetText.text
                user.innerText = tweetText.userName;
                twitDiv.appendChild(tweet);
                twitDiv.appendChild(user);
            }
        })
	}
  
	/*Calls function once page loaded to display tweets to page*/
	getData();
    $('#submit-button').click(postData);
   
    
});