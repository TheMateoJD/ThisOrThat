// this or that

// declaring variables from index.html
let btnthis = document.querySelector(".this");
let btnthat = document.querySelector(".that");
let pic1 = document.getElementById("p1");
let pic2 = document.getElementById("p2");
let ammount = document.getElementById("ammount");
let value = 0;

// api stuff
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "#####",
});

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};
// end of api stuff

// zawiniete w funkcje
function getimg() {
  return fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
    requestOptions
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (obj) {
      let imgurl = obj[0].url;
      // console.log(imgurl)
      return imgurl;
    });
}

//load starting pics
document.addEventListener("DOMContentLoaded", function () {
  console.log("page loaded");
  getimg().then(function (imgurl) {
    console.log("link1: " + imgurl);
    pic1.innerHTML = `<img src="${imgurl}" class="pic1" width=300px height=300px  alt=""></div>`;
  });
  getimg().then(function (imgurl) {
    console.log("link1: " + imgurl);
    pic2.innerHTML = `<img src="${imgurl}" class="pic1" width=300px height=300px  alt=""></div>`;
  });
});

btnthis.addEventListener("click", function () {
  console.log("Clicked this button");
  getimg().then(function (imgurl) {
    console.log(imgurl);
    pic2.innerHTML = `<img src="${imgurl}" class="pic1" width=300px height=300px  alt=""></div>`;
  });
  value = value + 1;
  ammount.textContent = value;
});

btnthat.addEventListener("click", function () {
  // console.log("Clicked that button")
  getimg().then(function (imgurl) {
    // console.log(imgurl)
    pic1.innerHTML = `<img src="${imgurl}" class="pic1" width=300px height=300px alt=""></div>`;
  });
  value = value + 1;
  ammount.textContent = value;
});
