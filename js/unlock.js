/* This script will unlock a tag buttons when homeowners log in successfully */

function locker(){
if ($("a").hasClass("locked")) {
 $("a").removeClass('locked').addClass('unlocked');
 $("a").attr("onClick","return false");
} else {
 $("a").css("onclick","true");
 $("a").removeClass('unlocked').addClass('locked');
 $("a").attr("onClick","");
}
}
