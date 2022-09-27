// smooth scroll on clicking nav items
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 200);
    return false;
});

function openTarget() {
  var hash = location.hash.substring(1) + 'd';
  console.log(hash);
  if(hash) var details = document.getElementById(hash);
  if(details && details.tagName.toLowerCase() === 'details') details.open = true;
}
window.addEventListener('load', openTarget);
openTarget();


$( "img" ).click(function() {
  $( this ).toggleClass('active');
});



    
// random alignments
var classes = new Array ('left', 'left-half', 'center', 'right-half', 'right');

var length = classes.length;

var segments = $('.align');

// loop through all a-tags and apply color randomly
$.each( segments, function(key, value) {
  // get random value/class-name from array and add it using the addClass function
  console.log ("IN");
  $(value).addClass( classes[ Math.floor ( Math.random() * length ) ] );
});


//initialize date object
var d = new Date();
var currentHour = d.getHours(); //note 0-23

if (currentHour < 18 || currentHour > 4) 
 { 
     $('.mound-path').addClass('night');
  }
else
{
   $('.mound-path').addClass('day');
}