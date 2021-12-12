const title = document.querySelector(".hello h1");

function handleTitleClick(){
    title.style.color = "blue";
}
function handleTitleMouseEnter(){
    console.log("mouse entered");
}
function handleTitleMouseLeave(){
    console.log("mouse leaved");
}
function hideRuby(ruby){
    ruby.lastChild.style.visibility = "hidden";
}
function showRuby(ruby){
    ruby.lastChild.style.visibility = "visible";
}

const ruby = document.querySelector("ruby");


title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleTitleMouseEnter);
title.addEventListener("mouseleave", handleTitleMouseLeave);

ruby.addEventListener("mouseenter", ()=>{showRuby(ruby);});
ruby.addEventListener("mouseleave", ()=>{hideRuby(ruby);});