const URL = "https://my-json-server.typicode.com/matipasse/S13Twitter/posts"

fetch(URL)
  .then((response) => response.json())
  .then((data) => comentarios(data));


function comentarios(data) {
  console.log(data);
  let htmlContentToAppend = "";


  for (let i = 0; i < data.length; i++) {
    htmlContentToAppend += `
    <div class="profile-pic"><img src="https://xsgames.co/randomusers/avatar.php?g=pixel " /></div>
          <div class="content">
            <div class="names">
              <p class="full-name">${data[i].name}</p>
              <p class="user-name">${data[i].username}</p>
              <p class="time"> ${data[i].time}</p>
            </div>
          </div>
          <div class="tweet-content">
            <p>${data[i].text}</p>
          </div>
          <div class="tweet-icons">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <i class="fa fa-heart" aria-hidden="true"></i>
            <i class="fa fa-retweet" aria-hidden="true"></i>
          </div>
    `;
  
      };

      document.getElementById("tweets").innerHTML = htmlContentToAppend;
    };