const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGIwNjgwMzYyNDVlNTA4ZTc3YzY3MDU4YWE5MzdhOCIsInN1YiI6IjY0NzQ0NjFjYTg5NGQ2MDEzNjU2MGViYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d4lf11buCydrRLqrabGDr6F1k9q65iTg3xLMsO__ong'
    }
  };

let movie = [];
let noneClass = document.querySelectorAll('.hide');
let movieList = document.querySelectorAll('.movie-card');


  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        let results = response['results'];

        document.getElementById('movie-card').innerHTML = '';
        results.forEach((a) => {
            let title = a["title"];
            let desc = a['overview'];
            let rate = a['vote_average'];
            let idNumber = a['id'];
            let poster = a['poster_path'];

            let tempHtml = `<div class="movie-card">
                                <img src="https://image.tmdb.org/t/p/w500${poster}" alt="포스터" />
                                <div class="movie-desc">
                                    <h2>${title}</h2>
                                    <p>${desc}</p>
                                    <p class="rating">${rate}</p>
                                </div>
                            </div>`
            document.getElementById('movie-card').insertAdjacentHTML('afterbegin', tempHtml);
            
            // ID 알림창
            document.querySelector('.movie-card').onclick = function () {
                alert(`이 영화의 ID는 ${idNumber}입니다.`);
            };
        let counter = 1;
        movie.push({text:title});
        });
    })
    .catch(err => console.error(err));


// 검색 기능
const searchInput = document.querySelector('input[type="text"]');

searchInput.addEventListener('keyup', searchFunc);

function searchFunc() {
    // for (const list of movieList) {
    //     list.classList.add(noneClass);
    // }
    movieList.forEach((item => {
        item.classList.add(noneClass);
    }))
    const keywords = this.value;

    const filteredArry = movie.filter(el => el.text.toLowerCase().includes(keywords.toLowerCase()));
    console.log(filteredArry);

    if (filteredArry.length > 0) {
        for (const el of filteredArry) {
            document.querySelector().classList.remove(noneClass);
        }
    }
}


