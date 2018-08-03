const h2planetas = document.querySelectorAll('.planetas')
const urlplanetas =`https://swapi.co/api/planets/`
const descplanetas = document.querySelectorAll('.descplanetas')

loadplanetas()

function loadplanetas(){
    fetch(urlplanetas)
    .then(resp => resp.json())
    .then(planets => loaddata(planets))
}

function loaddata(planets){
    for( let i=0; i<h2planetas.length; i++){
        h2planetas[i].innerHTML =`${planets.results[i].name}`
        descplanetas[i].innerHTML = `<p style="color: white; font-size: 20px">Rotation Period: ${planets.results[i].rotation_period} hours </p>
        <p style="color: white; font-size: 20px">Orbital Period: ${planets.results[i].orbital_period} days </p>
        <p style="color: white; font-size: 20px">Climate: ${planets.results[i].climate}</p>
        <p style="color: white; font-size: 20px">Terrain: ${planets.results[i].terrain} </p>
        <p style="color: white; font-size: 20px">Population: ${planets.results[i].population}</p>`
    }   
}