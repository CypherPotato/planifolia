var __isNavigating = false;
var componentCache = [];
window.$insecureEval = eval;
window.Planifolia = {};
window.PlanifoliaSettings = {
    onNavigating: () => { },
    onNavigated: () => { },
    onFetch: (p) => { },
    handleFileResolve: (f) => f,
    basePath: "/view/",
    delayNavigation: 0,
    container: null, // must define
    autoRewriteLinks: true
}; 