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
