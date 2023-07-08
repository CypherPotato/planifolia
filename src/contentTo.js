window.Planifolia.contentTo = (target, path) => {
    window.PlanifoliaSettings.onNavigating();
    window.PlanifoliaSettings.onFetch(path);
    __isNavigating = true;

    var routerFile = window.Planifolia.resolveFile(path);
    fetch(routerFile)
        .then(res => res.text())
        .then(text => {
            target.innerHTML = text;
            window.Planifolia.fetchComponents(target);
            window.Planifolia.fetchElements(target);
        });
}