window.Planifolia.fetchTo = (target, path) => {
    window.PlanifoliaSettings.onNavigating();
    window.PlanifoliaSettings.onFetch(path);
    __isNavigating = true;

    var routerFile = window.Planifolia.resolveFile(path);
    fetch(routerFile)
        .then(res => res.text())
        .then(text => {
            let newElement = Planifolia.replaceElementBy(target, text);
            window.Planifolia.fetchComponents(newElement);
            window.Planifolia.fetchElements(newElement);
        });
} 