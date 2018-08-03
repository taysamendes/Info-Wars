const h2 = document.querySelectorAll('.titulo')
const url2 =`https://swapi.co/api/films/`
const desc = document.querySelectorAll('.descfilmes')

loadfilmes()

function loadfilmes(){
    fetch(url2)
    .then(resp => resp.json())
    .then(movies => loaddata2(movies))
}
function loaddata2(movies){
    for(let i=0; i<h2.length; i++){
        h2[i].innerHTML =`${movies.results[i].title}`
        desc[i].innerHTML = `<p style="color: white; font-size:30px"> Episode: ${movies.results[i].episode_id} </p>
        <p style="color: white; font-size:20px">Opening: ${movies.results[i].opening_crawl}</p>
        <p style="color: white; font-size:18px">Director: ${movies.results[i].director} </p>
        <p style="color: white; font-size:18px">Release Date: ${movies.results[i].release_date}</p>`
   }
}

