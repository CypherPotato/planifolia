window.Planifolia.resolveFile = (partialName) => {    
    var basePath = window.PlanifoliaSettings.basePath;
    var prefix = window.location.origin + window.location.pathname;
    return window.Planifolia.joinPaths(prefix, basePath, partialName + ".html");
}