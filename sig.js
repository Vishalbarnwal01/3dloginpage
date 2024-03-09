function getMousePosition(e) {
    var x, y = 0;
    if (e.pageX && e.pageY) {
    x = e.pageX;
    y = e.pageY;
    }else if (e.clientX && e.clientY) {
    x = e.clientX + (document.documentElement.scrollLeft ?
    document.documentElement.scrollLeft :
    document.body.scrollLeft);
    y = e.clientY + (document.documentElement.scrollTop ?
    document.documentElement.scrollTop :
    document.body.scrollTop);
    }
    return {
    x: x,
    y: y
    }
    }
    function updateLoginBoxRotation(elem, ry, rx) {
    var factor = 30;
    rx = -( (rx > 0.5) ? (rx-0.5)*2 : -(1-rx-0.5)*2) * factor;
    ry = -( (ry > 0.5) ? -(ry-0.5)*2 : (1-ry-0.5)*2) * factor;
    var accuracy = 10;
    rx = Math.round((rx)*accuracy)/accuracy;
    ry = Math.round((ry)*accuracy)/accuracy;
    var transform = 'rotateX('+rx+'deg) rotateY('+ry+'deg)';
    elem.style.webkitTransform = transform;
    elem.style.transform = transform;
    }
    
    function init() {
    rotate = true;
    var loginBox = document.getElementById('login');
    window.onmousemove = function(e) {
    if (rotate) {
    var mPOS = getMousePosition(e);
    updateLoginBoxRotation(loginBox, mPOS.x/window.innerWidth, mPOS.y/window.innerHeight);
    }
    }
    }
    
    document.addEventListener("DOMContentLoaded", init, false);