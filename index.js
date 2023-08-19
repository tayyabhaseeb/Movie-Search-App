const input = document.getElementById("input");
const sectionTwoCont = document.getElementById("section-two-container");

document.getElementById("searchBtn").addEventListener("click", async () => {
  fetch(`https://www.omdbapi.com/?t=${input.value}&apikey=7b7f0630`)
    .then((response) => response.json())
    .then((obj) => {
      console.log(obj);

      sectionTwoCont.innerHTML += `

              <div class="movie-info-container">
                <div class="movie-img-cont">
                  <img src="${obj.Poster}" class="movie-img" />
                </div>
                <div class="movie-info-box">
                  <div class="child-one">
                    <h4>${obj.Title}</h4>
                    <img src="images/StarIcon.png" class="star-icon" />
                    <h6>${obj.imdbRating}</h6>
                  </div>
                  <div class="child-two">
                    <p>${obj.Runtime}</p>
                    <p>${obj.Genre}</p>
                    <div class="add-icon-container">
                      <img src="images/plusicon.png" />
                      <p>Watchlist</p>
                    </div>
                  </div>
                  <div class="child-three">
                    <p>
                     ${obj.Plot}
                    </p>
                  </div>
                </div>
              </div>
              `;
    });
});
