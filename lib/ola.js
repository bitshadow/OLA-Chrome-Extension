(function () {

	var api_token = '';

	var $cards = $('#cards');
  var $btn = $('<button/>').text('Book OLA').attr('class', 'ola-btn');

  $btn.on('click', function() {
    alert('add click functionality here');
  });

  $cards.append($btn);
})();

// regular expression to retrieve the src and dst
// co-ordinate.
var regex = /[1|2]d[+,-]*[0-9]+.[0-9]+!?/g
console.log(getEndpoints(window.location.href));

// this function return the src and destination from the url
// in the following format:
// {
// src : [X, Y]
// dest : [X, Y]
//}
function getEndpoints (url) {
  return {
    src: getSource(url),
    dst: getDestination(url)
  };
}

// this function reurn the source
// [X, y]
function getSource(data) {
  return data.match(regex);
}

// this funciton return the destination
// [X, Y]
function getDestination() {
  return [6, 7];
}
