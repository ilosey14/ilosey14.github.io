/**
 * DOM helper library.
 */
var $ = $ || (function () {
    function common(obj) {
        if (!obj || obj.ian) return obj;
        for (var i = 0, k = Object.keys($.fn); i < k.length; i++) {
            if (obj.length) {
                for (var j = 0; j < obj.length; j++)
                    obj[j][k[i]] || (obj[j][k[i]] = $.fn[k[i]]);
            }
            else {
                obj[k[i]] = $.fn[k[i]];
            }
        }
        return obj;
    }

    var $ = function (a) { return common(document.getElementById(a)); };

    $.$ = true;
    $.class = function (a) { return common(document.getElementsByClassName(a)); };
    $.tag   = function (a) { return common(document.getElementsByTagName(a)); };
    $.query = function (a) { return common(document.querySelectorAll(a)); };
    $.new   = function (a, b) { return common(document.createElement(a)).set(b); };

    $.fn = {
        $: true,
        class: function (a) { return common(this.getElementsByClassName(a)); },
        tag: function (a) { return common(this.getElementsByTagName(a)); },
        query: function (a) { return common(this.querySelectorAll(a)); },
        set: function (a) {
            if (!a) return this;
            if (typeof a !== 'object') { this.textContent = a; return this; }

            for (var i = 0, b = Object.keys(a); i < b.length; i++) {
                if (typeof a[b[i]] === 'object' && this[b[i]])
                    $.fn.set.call(this[b[i]], a[b[i]]);
                else
                    this[b[i]] = a[b[i]];
            }
            return this;
        },
        append: function (a, b) { return this.appendChild($.new(a, b)); }
    };

    return $;
})();
