!function(t){function e(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,a){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}({5:function(t,e){},8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(5);var a=5e3,s=.1,r=.1,n=.3,o=.3,h="rgba(214, 230, 255, 1)",c="rgba(214, 230, 255, 0.4)",l=.5,d=2*Math.PI,v=function(){function t(t){var e=this;this.particles=[],this.container=t,this.canvas=document.createElement("canvas"),this.canvas.width=this.container.offsetWidth,this.canvas.height=this.container.offsetHeight,this.canvas.style.display="block",this.container.insertBefore(this.canvas,this.container.firstChild);var i=this.canvas.getContext("2d");if(!i)throw Error("Canvas Initialization Failed.");this.ctx=i,this.ctx.fillStyle=h,this.ctx.strokeStyle=c,this.ctx.lineWidth=l;for(var d=Math.round(this.canvas.width*this.canvas.height/a),v=0;v<d;v++)this.particles.push({x:Math.ceil(Math.random()*this.canvas.width),y:Math.ceil(Math.random()*this.canvas.height),vx:((n-s)*Math.random()+s)*(Math.random()>=.5?1:-1),vy:((o-r)*Math.random()+r)*(Math.random()>=.5?1:-1)});window.addEventListener("resize",function(){return e.resizeHandler()}),this.update()}return t.prototype.update=function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var e=this.container.offsetWidth,i=this.container.offsetHeight,a=0;a<this.particles.length;a++){var s=this.particles[a];(s.x+s.vx>e||s.x+s.vx<0)&&(s.vx=-s.vx),(s.y+s.vy>i||s.y+s.vy<0)&&(s.vy=-s.vy),s.x+=s.vx,s.y+=s.vy}for(var a=0;a<this.particles.length;a++){var r=this.particles[a];this.ctx.beginPath(),this.ctx.arc(r.x,r.y,2,0,d,!0),this.ctx.closePath(),this.ctx.fill(),this.ctx.beginPath();for(var n=a;n<this.particles.length;n++){var o=this.particles[n],h=r.x-o.x,c=o.y-o.y;Math.sqrt(h*h+c*c)<100&&(this.ctx.moveTo(r.x,r.y),this.ctx.lineTo(o.x,o.y))}this.ctx.stroke(),this.ctx.closePath()}requestAnimationFrame(function(){return t.update()})},t.prototype.resizeHandler=function(){var t=this.canvas.width=this.container.offsetWidth,e=this.canvas.height=this.container.offsetHeight;this.ctx.fillStyle=h,this.ctx.strokeStyle=c,this.ctx.lineWidth=l;for(var i=this.particles.length-1;i>=0;i--)(this.particles[i].x>t||this.particles[i].y>e)&&this.particles.splice(i,1);for(var d=Math.round(this.canvas.width*this.canvas.height/a);this.particles.length<d;)this.particles.push({x:Math.ceil(Math.random()*this.canvas.width),y:Math.ceil(Math.random()*this.canvas.height),vx:((n-s)*Math.random()+s)*(Math.random()>=.5?1:-1),vy:((o-r)*Math.random()+r)*(Math.random()>=.5?1:-1)});this.particles.length>d&&this.particles.splice(d)},t}();document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("splash");if(!t)throw Error("#splash is not found.");new v(t)}),window.onload=function(){for(var t=({webgpu:"WebGPUComputeCommandEncoder"in window,webassembly:"Worker"in window,fallback:!0}),e=0,i=["webgpu","webassembly","fallback"];e<i.length;e++)for(var a=i[e],s=0,r=Array.from(document.querySelectorAll(".Compatibility-ThisBrowserTable .Compatibility-"+a));s<r.length;s++){var n=r[s];n.classList.remove("Compatibility-checking");var o=n.querySelector(".Compatibility-Status");t[a]?(n.classList.add("Compatibility-supported"),n.classList.remove("Compatibility-not_supported"),o&&(o.textContent="Supported")):(n.classList.remove("Compatibility-supported"),n.classList.add("Compatibility-not_supported"),o&&(o.textContent="Not supported"))}for(var h=document.querySelectorAll("iframe"),c=0;c<h.length;c++)h[c].src=""+h[c].dataset.src;for(var l=document.querySelectorAll("img"),c=0;c<l.length;c++)l[c].src=""+l[c].dataset.src,l[c].srcset=""+l[c].dataset.srcset;"serviceWorker"in navigator&&navigator.serviceWorker.register("/webdnn/sw.js")}}});