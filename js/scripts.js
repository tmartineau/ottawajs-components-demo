(function () {
	var betterBlinkTmpl = document.getElementById('better-blink-tmpl'),
		betterBlinks = Array.prototype.splice.call(document.querySelectorAll('.better-blink'), 0);

	betterBlinks.forEach(function (bb) {
		var shadow = bb.webkitCreateShadowRoot();

		shadow.appendChild(betterBlinkTmpl.content);
	});

	betterBlinkTmpl.remove();
})()