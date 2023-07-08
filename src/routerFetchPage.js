window.Planifolia.routerFetchPage = () => {

    if (window.PlanifoliaSettings.container == null) {
        throw "Please, define the window.PlanifoliaSettings.container before running the router!";
    }

    var path = window.location.hash.replace("#/", "");

    window.path = "/" + path.replace(/^\//, "");
    window.pathAndQuery = window.path;

    if (path == "") {
        path = "index";
        window.location.href = "#/"
    }

    if (path.includes('?')) {
        let querystring = path.substring(path.indexOf('?'));
        window.query = window.Planifolia.parseQuery(querystring);
        path = path.substring(0, path.indexOf('?'));
        window.path = window.path.substring(0, window.path.indexOf('?'));
        if (path == "") {
            path = "index";
        }
    } else {
        window.query = {};
    }

    var routerFile = window.Planifolia.resolveFile(path);
    window.locationFile = routerFile;

    window.PlanifoliaSettings.onNavigating();
    __isNavigating = true;
    let delay = window.PlanifoliaSettings.delayNavigation;
    setTimeout(() => {
        fetch(routerFile)
            .then(res => res.text())
            .then(text => {
                window.PlanifoliaSettings.container.innerHTML = text;
                window.Planifolia.fetchComponents(window.PlanifoliaSettings.container);
                window.Planifolia.fetchElements(window.PlanifoliaSettings.container);
            });
    }, delay);
}