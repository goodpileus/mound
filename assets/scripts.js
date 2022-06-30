
var clicked = false, clickY;
$(document).on({
    'mousemove': function(e) {
        clicked && updateScrollPos(e);
    },
    'mousedown': function(e) {
        clicked = true;
        clickY = e.pageY;
    },
    'mouseup': function() {
        clicked = false;
        $('html').css('cursor', 'grab');
    }
});

var updateScrollPos = function(e) {
    $('html').css('cursor', 'grabbing');
    $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
}


// scrollbooster to enable drag scrolling
// new ScrollBooster({
//   viewport: document.querySelector('#main'),
//   content: document.querySelector('#main'),
//   scrollMode: 'native',
//   direction: 'vertical'
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const ele = document.getElementById('main');
//     ele.style.cursor = 'grab';
//
//     let pos = { top: 0, left: 0, x: 0, y: 0 };
//
//     const mouseDownHandler = function (e) {
//         ele.style.cursor = 'grabbing';
//         ele.style.userSelect = 'none';
//
//         pos = {
//             left: ele.scrollLeft,
//             top: ele.scrollTop,
//             // Get the current mouse position
//             x: e.clientX,
//             y: e.clientY,
//         };
//
//         document.addEventListener('mousemove', mouseMoveHandler);
//         document.addEventListener('mouseup', mouseUpHandler);
//     };
//
//     const mouseMoveHandler = function (e) {
//         // How far the mouse has been moved
//         const dx = e.clientX - pos.x;
//         const dy = e.clientY - pos.y;
//
//         // Scroll the element
//         ele.scrollTop = pos.top - dy;
//         ele.scrollLeft = pos.left - dx;
//     };
//
//     const mouseUpHandler = function () {
//         ele.style.cursor = 'grab';
//         ele.style.removeProperty('user-select');
//
//         document.removeEventListener('mousemove', mouseMoveHandler);
//         document.removeEventListener('mouseup', mouseUpHandler);
//     };
//
//     // Attach the handler
//     ele.addEventListener('mousedown', mouseDownHandler);
// });



// smooth scroll on clicking nav items
// $('a').click(function(){
//     $('html, body').animate({
//         scrollTop: $( $(this).attr('href') ).offset().top
//     }, 200);
//     return false;
// });
