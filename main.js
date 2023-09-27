const URL = "https://my-json-server.typicode.com/matipasse/S13Twitter/posts"

fetch(URL)
    .then(response => response.json())
    .then(data => {console.log(data);})