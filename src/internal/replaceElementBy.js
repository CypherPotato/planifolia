window.Planifolia.replaceElementBy = (element, text) => {
    let newElement = document.createElement(null);
    newElement.innerHTML = text;
    newElement = newElement.firstChild;
    element.replaceWith(newElement);
    return element;
}