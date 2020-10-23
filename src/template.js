function Template(header, dir = '') {
	this.header = document.getElementById('header-h1');
	this.frame = document.getElementById('content-frame');

	// handle content
	var content = null;

	this.frame.onload = function () {
		content = this.contentWindow.document;

		// assimilate styles
		var styles = document.getElementsByTagName('style'),
			links = document.querySelectorAll('link[rel=stylesheet]');

		for (let style of styles)
			content.head.appendChild(style.cloneNode(true));

		for (let link of links)
			content.head.appendChild(link.cloneNode(true));

		// adjust content height
		this.onresize();
	};

	this.frame.onresize = function () {
		this.style.height = (1.1 * content.body.scrollHeight) + 'px';
	};

	// make src path
	var path = dir.split('/').filter(item => item);

	if (path.length) {
		if (path[path.length - 1].indexOf('.') >= 0) {
			path.pop();
			dir = path.join('/');
		}
	}
	else
		dir = '';

	// set content
	this.setHeader(header);
	this.setContentSrc(dir + '/content.html');
};

Template.prototype.addScript = function (src) {
	document.body.appendChild(document.createElement('script')).src = src;
};

Template.prototype.addStyle = function (href) {
	var link = document.body.appendChild(document.createElement('link'));

	link.rel = 'stylesheet';
	link.href = href;
};

Template.prototype.setHeader = function (text) {
	this.header.textContent = text;
};

Template.prototype.setContentSrc = function (src) {
	this.frame.src = src;
};