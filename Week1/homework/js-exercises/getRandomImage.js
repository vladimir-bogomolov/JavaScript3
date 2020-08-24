const url = 'https://xkcd.now.sh/?comic=latest';
const getImgXHR = () => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                console.log(xhr.response);
                let img = document.createElement('img');
                img.src = xhr.response.img;
                document.body.appendChild(img);
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

function getImgAxios() {
    axios
        .get(url)
        .then((response) => {
            console.log(response.data);
            let img = document.createElement('img');
            img.src = response.data.img;
            document.body.appendChild(img);
        })
        .catch((error) => console.log(error.message));
}

getImgXHR();
getImgAxios();
