var $ = mlec;

function mlec(val) {
    var element = [];
    for (let el of document.querySelectorAll(val)) {
        element.push(el);
    }

    element.css = function (name, value) {
        if (typeof (name) === "object") {
            for (let el of this) {

                for (let key in name) {
                    el.style[key] = name[key];
                }

            }
            return this;
        }

        if (value != undefined) {
            for (let el of this) {
                el.style[name] = value;
            }
            return this;
        }

        return this[0].style[name];    
    };

    element.attr = function (name, value) {
        if (typeof (name) === "object") {
            for (let el of this) {

                for (let key in name) {
                    el.setAttribute(key, name[key]);
                }

            }
            return this;
        }

        if (value != undefined) {
            for (let el of this) {
                el.setAttribute(name, value);
            }
            return this;
        }

        return this[0].getAttribute(name);    
    };

    element.click = function (cb) {
        return this.on("click", cb);
    };

    element.mousemove = function (cb) {
        return this.on("mousemove", cb);
    };

    element.on = function (eventType, cb) {
        for (let el of this) {
            el.addEventListener(eventType, cb);
        }
        return this;
    };

    element.val = function (value) {
        if (value != undefined) {
            for (let el of this) {
                el.value = value;
            }
            return this;
        }

        return this[0].value;
    };

    element.html = function (html) {
        if (html != undefined) {
            for (let el of this) {
                el.innerHTML = html;
            }
            return this;
        }
        
        return this[0].innerHTML;
    };

    element.text = function (text) {
        if (text != undefined) {
            for (let el of this) {
                el.innerText = text;
            }
            return this;
        }
        let result = "";
        for (let el of this) {
            result += el.innerText + "\n";
        }
        return result;
    };

    return element;
}

