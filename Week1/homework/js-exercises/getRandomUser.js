const url = 'https://www.randomuser.me/api';
const getRandomUserXHR = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                console.log(xhr.response);
            } else {
                console.log(`Error ${xhr.status} : ${xhr.statusText}`);
            }
        }
    }
    xhr.onerror = () => {
        console.log("Something went wrong");
    }
    xhr.open('GET', url);
    xhr.send();
}

function getRandomUserAxios() {
    axios
        .get(url)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error.message));
}

getRandomUserXHR();
getRandomUserAxios();
