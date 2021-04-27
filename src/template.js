function Template(dir, options) {
	this.header = document.getElementById('page-header');
	this.frame = document.getElementById('content-frame');

	// make src path
	var path = dir.split('/').filter(item => item);

	if (path.length) {
		if (path[path.length - 1].indexOf('.') >= 0)
			path.pop();

		dir = path.join('/');
	}
	else
		dir = '';

	// set content
	this.setHeader(options.header);
	this.appendStyle(options.style)
	this.setContentSrc(dir + '/content.html');
};

Template.prototype.setHeader = function (text) {
	this.header.textContent = text || '[object IMessedSomethingUp]';
};

Template.prototype.setContentSrc = function (src) {
	if (!src) return;

	var xhr = new XMLHttpRequest(),
		frame = this.frame;

	xhr.open('get', src);

	xhr.responseType = 'text'; // 'document' appended everything display:inline ???
	xhr.onload = function () {
		var content = (new DOMParser).parseFromString(this.response, 'text/html');

		while (content.body.children.length)
			frame.appendChild(content.body.firstElementChild);
	};
	xhr.onerror = function () {
		frame.appendChild(document.createElement('p'))
			.textContent = 'If I was better at coding, there\'d be something here :/';
	};

	xhr.send();
};

Template.prototype.appendStyle = function (href) {
	if (!href) return;

	var link = document.head.appendChild(document.createElement('link'));

	link.rel = 'stylesheet';
	link.href = href;
};