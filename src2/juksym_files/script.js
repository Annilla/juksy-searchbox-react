function loadPaStatP(){pa("cb",(new Date).getTime()),pa("app_name",navigator.appVersion);var a=document.createElement("img");a.width="0",a.height="0",a.style.display="none";for(var t="",e=0;e<pa.q.length;e++){var n=pa.q[e];""!=t&&(t+="&"),t+=n[0]+"="+encodeURIComponent(n[1])}var o="https://analytic.pixels.asia/stats/new?";a.src=o.concat(t),document.getElementsByTagName("body")[0].appendChild(a)}function autoloadPaStatP(){pa.b&&loadPaStatP()}window.addEventListener?window.addEventListener("load",autoloadPaStatP,!1):window.attachEvent("onload",autoloadPaStatP);