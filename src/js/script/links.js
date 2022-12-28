function loadlinks() {
    fetch("./src/js/script/links.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById('link-discord').href = data.discord
            document.getElementById('link-arda').href = data.arda
        })
}
