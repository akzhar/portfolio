try {

  var menubutton = document.querySelector(".menu-btn");
  var menu = document.querySelector(".navigation-list");

  menu.classList.remove("navigation-list--nojs");

  menubutton.addEventListener("click", function(evt) {
    evt.preventDefault();
    menu.classList.toggle("navigation-list--open");
    menubutton.classList.toggle("menu-btn--open");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (menu.classList.contains("navigation-list--open")) {
        evt.preventDefault();
        menu.classList.remove("navigation-list--open");
      }
    }
  });

}catch(e){
}



var i,c,y,v,s,n;
var v=document.getElementsByClassName("youtube");

if(v.length>0) {
  s=document.createElement("style");
  s.type="text/css";
  s.innerHTML='.youtube{background-color:#000;max-width:100%;overflow:hidden;position:relative;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("img/play.png") no-repeat}';
  document.body.appendChild(s);
}

for(var n=0; n < v.length; n++) {
  y=v[n];
  i=document.createElement("img");
  i.setAttribute("src","http://i.ytimg.com/vi/"+y.id+"/hqdefault.jpg");
  i.setAttribute("class","thumb");
  c=document.createElement("div");
  c.setAttribute("class","play");
  y.appendChild(i);
  y.appendChild(c);
  y.onclick=function() {
    var a=document.createElement("iframe");
    a.setAttribute("src","https://www.youtube.com/embed/"+this.id+"?autoplay=1&enablejsapi=1&border=0&showinfo=0&color=white&rel=0");
    a.setAttribute("allowfullscreen","allowfullscreen");
    a.style.width=this.style.width;
    a.style.height=this.style.height;this.parentNode.replaceChild(a,this);
  }
};

