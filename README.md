### Instructions

The objective of this project is to create a mock twitter.

It is advised to globally install nodemon and mocha since a server will be used in this project. Nodemon will allow for the server to run and continuously update when changes occur in your files.

~~~~~~
$ npm install -g nodemon bower
~~~~~~

Then:

Create a file in the root of your project called `.bowerrc`. It should contain:
```
{
  "directory": "client/components"
}
```

THEN:

~~~~~~
$ npm install
$ bower install
~~~~~~

Note: .bowerrc file specifies the path where bower components will be installed (bootstrap and jquery dependecies).

#### Further Reading

[CommonJS - How and Why](http://0fps.net/2013/01/22/commonjs-why-and-how/)
[Bower Docs](http://bower.io/)
[Browserify](http://blakeembrey.com/articles/2013/09/introduction-to-browserify/)
Ajax requests with [jQuery](http://api.jquery.com/jquery.ajax/)
[Status Codes](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

### Basic Req's
~~~~~~
$ nodemon
~~~~~~

This will run the project at http://localhost:3000/.


##### client
* index.html - Style your application appropriately
	* It should contain a form which submits post data and a list of all tweets.
* main.js - javascript to handle the behavior on the client side of the application
	* postTweets():
		* create a jquery ajax request to post a new tweet
		* each message should be an object with text and user properties (may use default username)
	* getTweets():
		* create a jquery ajax request to get all tweets from the backend.
	* Use jquery to enable the submit button

#### API Documentation
This REST API has two endpoints for a single Tweet resource. They are:

* `http://localhost:3000/api/tweets` - collection URL for tweets
* `http://localhost:3000/api/tweets/[some_id]` - item URL for single tweet

##### server (Already done for you)
* data.json - a json storage file that contains the tweets
* index.js - server side code with [nodejs](https://nodejs.org/en/docs/)
	* Starts a server to handle get and post requests from front end.
