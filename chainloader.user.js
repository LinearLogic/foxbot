// ==UserScript==
// @name           FoxbotLoader
// @namespace      N/A
// @description    chainloader foxbot for plug.dj
// @include        *plug.dj/*/*
// @version 1.0
// ==/UserScript==
/*
 * chainloader.js - a loader for foxbot
 * 
 * Copyright (C) 2012 by 1NT and FoxtrotFire
 */
 
document.addEventListener('DOMContentLoaded',function(){
	var scriptTag = document.createElement('script');
	scriptTag.type = 'text/javascript';
	scriptTag.src = 'https://raw.github.com/ssitaru/foxbot/master/foxbot.js';
	document.body.appendChild(scriptTag);
});