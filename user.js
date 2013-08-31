$(document).ready(function(){
function refreshTweets() {
  var $doc = $('.doc');
  $doc.html('');
  $doc.append("<p class='heading'>Welcome to Twittler</p>");
  var index = streams.users.shawndrost.length - 1;
  var noOfTweets = 0;

  while(noOfTweets < 10 && index >= 0){
    var tweet = streams.users.shawndrost[index];
    var $tweet = $('<div class="tweet"></div>');
    $tweet.append('<a href="' + tweet.user + '.html">' + '@' + tweet.user + '</a>: ' + tweet.message);
    $tweet.appendTo($doc);

    var tweetTime = tweet.created_at;
    var $tweetTime = $('<div class="time"></div>');
    $tweetTime.text('Sent ' + tweetTime.toLocaleTimeString() + " on " + tweetTime.toLocaleDateString());
    $tweetTime.appendTo($tweet);

    index -= 1;
    noOfTweets ++;
  }
  $('.tweet:even').addClass('highlight');
}

refreshTweets();
setInterval(refreshTweets, 10000);
});
