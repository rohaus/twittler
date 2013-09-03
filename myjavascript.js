$(document).ready(function(){
  function refreshTweets() {
    var $doc = $('.doc');
    $doc.html('');
    $doc.append("<p class='heading'>Welcome to Twittler</p>");
    var index = streams.home.length - 1;
    var noOfTweets = 0;

    while(noOfTweets < 10 && index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet ' + tweet.user + '"></div>');
      $tweet.append('<a id="' + tweet.user + '">' + '@' + tweet.user + '</a>: ' + tweet.message);
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
  setInterval(refreshTweets, 15000);

  $('.sharksforcheap').on('click', function(){
    $('.tweet').removeClass('highlight').addClass('hidden');
    $('.tweet.sharksforcheap').addClass('highlight').removeClass('hidden'); 
  });
  
  $('.mracus').on('click', function(){
    $('.tweet').removeClass('highlight').addClass('hidden');
    $('.tweet.mracus').addClass('highlight').removeClass('hidden'); 
  });
  
  $('.douglascalhoun').on('click', function(){
    $('.tweet').removeClass('highlight').addClass('hidden');
    $('.tweet.douglascalhoun').addClass('highlight').removeClass('hidden'); 
  });
  
  $('.shawndrost').on('click', function(){
    $('.tweet').removeClass('highlight').addClass('hidden');
    $('.tweet.shawndrost').addClass('highlight').removeClass('hidden'); 
  });
});
