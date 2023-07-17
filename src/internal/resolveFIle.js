window.Planifolia.resolveFile = (partialName) => {
    var basePath = window.PlanifoliaSettings.basePath;
    var prefix = window.location.origin + window.location.pathname;
    var result = window.Planifolia.joinPaths(prefix, basePath, partialName + ".html");
    return window.PlanifoliaSettings.onFileResolve(result);
}