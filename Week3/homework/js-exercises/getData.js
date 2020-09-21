const getData = async (url) => {
    try {
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);
    } catch(error) {
        console.log(error);
    }   
}
getData('https://randomfox.ca/floof/');