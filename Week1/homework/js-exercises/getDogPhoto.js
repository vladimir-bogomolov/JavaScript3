const url = 'https://dog.ceo/api/breeds/image/random';

function addImgToList(imgSrc) {
    let img = document.createElement('img');
    img.src = imgSrc;
    img.style.width = '300px';
    let listElem = document.createElement('li');
    listElem.appendChild(img);
    listElem.style.listStyle = 'none';
    document.querySelector('ul').appendChild(listElem);
}

function displayError(errorMessage) {
    let listElem = document.createElement('li');
    listElem.innerText = errorMessage;
    listElem.style.listStyle = 'none';
    document.querySelector('ul').appendChild(listElem);
}

const getDogXHR = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                addImgToList(xhr.response.message);
            } else {
                displayError(`Error ${xhr.status}`);
            }
        }
    }
    xhr.onerror = () => {
        displayError('Something went wrong');
    }
    xhr.open('GET', url);
    xhr.send();
}

function getDogAxios() {
    axios
        .get(url)
        .then((response) => {
            addImgToList(response.data.message);
        })
        .catch((error) => {
            displayError(error.message);
        });
}

document.getElementById('xhr').addEventListener('click', getDogXHR);
document.getElementById('axios').addEventListener('click', getDogAxios);

