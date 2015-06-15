(function() {
var rotator = document.getElementById('rotator'), //get the element
   var delayInSeconds = 1,                           //delay in seconds
   var num = 0,                                      //start number
   var len = 9999;                                      //limit
setInterval(function(){                           //interval changer
    num = (num === len) ? 0 : num;                //reset if limit reached
    rotator.src = 'images/'+ num + '.jpg';                     //change picture
    num++;                                        //increment counter
}, delayInSeconds * 1000);
}());