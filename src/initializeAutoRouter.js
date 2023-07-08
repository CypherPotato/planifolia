window.Planifolia.initializeAutoRouter = () => {
    window.addEventListener('hashchange', function () {
        window.Planifolia.routerFetchPage();
    });

    window.Planifolia.routerFetchPage();
}