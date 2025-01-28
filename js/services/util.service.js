export function onChangeWebColors(bgColor,txtColor){
    document.getElementById("body").style.backgroundColor = bgColor;
    var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
 all[i].style.color = txtColor;
}
}