window.Planifolia.joinPaths = (...args) => {
    var output = "";
    for (const path of args) {
        output += path.replace(/^\/|\/$/g, '') + "/";
    }
    return output.substring(0, output.length - 1);
}