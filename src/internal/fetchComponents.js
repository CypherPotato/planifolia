window.Planifolia.fetchComponents = (target) => {
    var exts = target.querySelectorAll("include");
    if (exts.length == 0) {
        window.PlanifoliaSettings.onNavigated();
        __isNavigating = false;
        return;
    }
    exts.forEach(async e => {
        let name = e.getAttribute("name");
        let componentUrl = window.Planifolia.resolveFile(name);
        let text = "";
        if (componentCache[componentUrl] == undefined) {
            text = await fetch(componentUrl)
                .then(res => {
                    if (res.ok) {
                        return res.text();
                    } else {
                        throw new Error(`Cannot fetch include ${name}.`);
                    }
                });
            componentCache[componentUrl] = text;
        } else {
            text = componentCache[componentUrl];
        }
        
        for (const attr of e.attributes) {
            let attrName = attr.name;
            let attrValue = attr.value;
            if (!attrName.startsWith('@')) {
                continue;
            } else {
                attrName = attrName.substr(1);
            }
            const attrRgx = new RegExp('(?<!@)@' + attrName + '\\b', 'gi');
            text = text.replace(attrRgx, attrValue);
        }

        let newElement = document.createElement(null);
        newElement.innerHTML = text;
        newElement = newElement.firstChild;
        e.replaceWith(newElement);

        window.Planifolia.fetchElements(newElement);
        window.Planifolia.fetchComponents(newElement);
    });
}