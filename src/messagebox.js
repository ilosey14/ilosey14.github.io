if (!$ || !$.$) throw 'messagebox.js init failed: "common.js" library not found.';

var messagebox = (function () {
    var mbMask = $('messagebox-mask'),
        mbContent = $('messagebox-content'),
        mbButtons = $('messagebox-buttons');

    /**
     * Displays a messagebox with content and buttons
     * @param {string|HTMLElement} content message or content to display
     * @param {string[]|string} buttons buttons names
     * @param {function(string):void} callback handles a clicked button by passing its name
     */
    var messagebox = function (content, buttons = [], callback = null) {
        // content
        if (typeof content === 'string')
            messagebox.templates[content]
                ? mbContent.appendChild(messagebox.templates[content])
                : mbContent.append('div', { innerHTML: content });
        else if (content instanceof HTMLElement)
            mbContent.appendChild(content);
        else
            mbContent.append('div', {
                textContent: 'There was a problem displaying your message :('
            });

        // buttons
        if (buttons instanceof Array || (typeof buttons === 'string' && (buttons = [ buttons ]))) {
            buttons.forEach(function (b) {
                mbButtons.append('input', {
                    type: 'button',
                    value: b,
                    onclick: function () {
                        !callback || callback(this.value, mbContent.firstElementChild);
                        messagebox.close();
                    }
                });
            });
        }

        // show messagebox
        mbMask.classList.add('-show-messagebox');

        // autofocus
        var el = mbContent.query('[data-autofocus]');
        if (el.length)
            el[0].focus();
        else if (mbButtons.firstElementChild)
            mbButtons.firstElementChild.focus();
    };

    messagebox.close = function () {
        // hide messagebox
        mbMask.classList.remove('-show-messagebox');

        // clear content and buttons
        while (mbContent.children.length > 0)
            mbContent.removeChild(mbContent.lastChild)

        while (mbButtons.children.length > 0)
            mbButtons.removeChild(mbButtons.lastChild);
    };

    //templates
    messagebox.templates = {
        add: function (name, dom) {
            this[name] = dom;
        }
    };

    var templates = $.class('-messagebox-templates');
    while (templates.length) {
        [].forEach.call(templates[0].children, function (el) {
            messagebox.templates.add(el.dataset.name || el.id, el);
        });
        templates[0].parentElement.removeChild(templates[0]);
    }

    return messagebox;
})();

// handles clicks
$('messagebox-mask').onclick = function (e) {
    messagebox.close();
    e.stopPropagation();
};
$('messagebox-container').onclick = function (e) {
    e.stopPropagation();
};
