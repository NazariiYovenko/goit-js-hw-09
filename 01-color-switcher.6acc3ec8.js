!function(){TIMER_DELAY=1e3;var t=null;var e={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};function n(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));e.body.style.backgroundColor=t}e.startBtn.addEventListener("click",(function(){t=setInterval(n,TIMER_DELAY),e.startBtn.setAttribute("disabled","")})),e.stopBtn.addEventListener("click",(function(){clearInterval(t),e.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.6acc3ec8.js.map