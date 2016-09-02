var images = [];
var dogNum, img;
var numOfDogsPlus1 = 7;
var tries = 0;

// For each dog place two pictures
for(dogNum = 1; dogNum < numOfDogsPlus1; dogNum++) {
    img = 'images/dog' + dogNum + '.jpg';
    images.push(img);
    images.push(img);
}

randomizeImages();

function randomizeImages(){
  Array.prototype.randomize = function()
  {
    var i = this.length, j, temp;
    while ( --i )
    {
      j = Math.floor( Math.random() * (i - 1) );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  }

  images.randomize();
}

// Math.floor can also be ~~

// Output images then hide
var output = "<ol>";
for (var i = 0; i < 12; i++) {
  output += "<li>";
  output += "<img src = '" + images[i] + "'/>";
  output += "</li>";
}
output += "</ol>";
document.getElementById("background").innerHTML = output;
$("img").hide();

var guess1 = "";
var guess2 = "";
var count = 0;

$("li").click(function() {
  if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {

// Increment guess count, show image, mark it as face up
    count++;
    $(this).children("img").show();
    $(this).children("img").addClass("face-up");

// Guess #1
    if (count === 1 ) {
      guess1 = $(this).children("img").attr("src");
    }

// Guess #2
    else {
      guess2 = $(this).children("img").attr("src");

// Check for match
      if (guess1 === guess2) {
        console.log("yay");
        $("li").children("img[src='" + guess2 + "']").addClass("match");
      }

// Miss
      else {
        console.log("boo");
        setTimeout(function() {
          $("img").not(".match").hide();
          $("img").not(".match").removeClass("face-up");
        }, 1200);
      }

// Reset
      count = 0;
      setTimeout(function() { console.clear(); }, 50000);
    }
  }
});
