
var json = 'https://blossombabes.my.id/cpagrip/jsoncpagrip.php';

var xhttp = new XMLHttpRequest();

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
    console.log(item);
  }
};
