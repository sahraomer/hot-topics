// get the reference to the container
const container = document.querySelector(".container");
const errorContainer = document.querySelector(".error");
const links = document.querySelectorAll("nav a");

function handleLinkClick(ev) {
    ev.preventDefault();
    // find out which link is clicked
    let currentLink = ev.target;
    url = currentLink.href;
    handleAjax(url);
}
for (let link of links) {
    link.addEventListener("click", handleLinkClick);
}

function handleAjax(urlParam) {
    fetch(urlParam)
        .then( /* get the response */ function (response) {
            if (response.statusText === "OK") {
                return response.text();
            }
            throw new Error(response.statusText);
        })
        .then( /* parse the data */ function (data) {
            // use your partials
            container.innerHTML = data;
            // let jsonData = JSON.stringify(data);
            // container.textContent = jsonData;
            // console.log(data);
        })
        .catch( /* handle error */ function (err) {
            errorContainer.textContent = `${err.name}: ${err.message}`;
        });
};
