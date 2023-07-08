window.Planifolia.fetchElements = (target) => {
    target.querySelectorAll("script").forEach(s => {
        s.remove();
        try {
            window.$insecureEval(s.innerText);
        } catch (e) {
            throw e;
        }
    });
    if (window.PlanifoliaSettings.autoRewriteLinks) {
        target.querySelectorAll("a").forEach(e => {
            let href = e.getAttribute("href");
            if (href != null && href.startsWith("/") && !href.startsWith("#/")) {
                e.setAttribute("href", "#" + href);
            }
        });
    }
}