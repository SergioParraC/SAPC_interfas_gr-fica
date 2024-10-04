function loadHeader(newTitle) {
    fetch('/header.html')
        .then(response => response.text())
        .then(html => document.getElementById('header').innerHTML = html);
        document.title = newTitle;
}

function loadFooter() {
    fetch('/footer.html')
        .then(response => response.text())
        .then(html => document.getElementById('footer').innerHTML = html);
}

