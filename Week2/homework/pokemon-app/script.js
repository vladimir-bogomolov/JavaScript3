function fetchData(url, callback) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return callback(data);
        })
        .catch(err => {
            document.getElementById('showImg').innerHTML = `Something went wrong!`;
            throw new Error('Something went wrong!');
        });
}

function addPokemonToDOM(res) {
    document.getElementById('showImg').innerHTML = '';
    let img = document.createElement('img');
    img.src = res.sprites.front_shiny;
    document.getElementById('showImg').appendChild(img);
}

function main() {
    let getButton = document.createElement('button');
    getButton.innerText = 'Get Pokemon!';
    document.body.appendChild(getButton);
    let input = document.createElement('select');
    document.body.appendChild(input);
    let showImgDiv = document.createElement('div');
    showImgDiv.setAttribute('id', 'showImg');
    document.body.appendChild(showImgDiv);
    getButton.addEventListener('click', (e) => {
            input.innerHTML = '';
            fetchData('https://pokeapi.co/api/v2/pokemon/', (res) => {
                res.results.forEach(obj => {
                    let option = document.createElement('option');
                    option.innerText = obj.name;
                    input.appendChild(option);
                });
            })
    });
    input.addEventListener('change', e => {
        showImgDiv.innerHTML = '';
        fetchData(`https://pokeapi.co/api/v2/pokemon/${e.target.value}`, addPokemonToDOM);
    });
}

window.onload = main;