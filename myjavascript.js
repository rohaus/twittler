 $(document).ready(function(){

        function refreshTweets() {
          var $doc = $('.doc');
          $doc.html('');
          $doc.append("<p class='heading'>Welcome to Twittler</p>");
          var index = streams.home.length - 1;
          var noOfTweets = 0;

          while(noOfTweets < 10 && index >= 0){
            var tweet = streams.home[index];
            var $tweet = $('<div class="tweet"></div>');
            $tweet.text('@' + tweet.user + ': ' + tweet.message);
            $tweet.appendTo($doc);

            var tweetTime = tweet.created_at;
            var $tweetTime = $('<div class="time"></div>');
            $tweetTime.text('Sent: ' + tweetTime);
            $tweetTime.appendTo($tweet);

            index -= 1;
            noOfTweets ++;

          }
          $('.tweet:even').addClass('highlight');
        }

        refreshTweets();
        setInterval(refreshTweets, 5000);
      });
