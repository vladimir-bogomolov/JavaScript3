function fetchData(url, callback) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return callback(data);
        })
        .catch(err => console.log(err));
}

function addPokemonToDOM() {

}

function main() {
    let input = document.createElement('select');
    document.body.appendChild(input);
    fetchData('https://pokeapi.co/api/v2/pokemon/', (res) => {
        res.results.forEach(obj => {
            let option = document.createElement('option');
            option.innerText = obj.name;
            input.appendChild(option);
        });
    });
    
}

window.onload = main;