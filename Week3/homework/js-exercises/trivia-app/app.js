async function main() {
    // create basic structure
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);

    const header = document.createElement('h1');
    header.innerText = "Let's play some Trivia!";
    container.appendChild(header);

    const hint = document.createElement('h4');
    hint.innerText = 'Try your best to figure out the answer. If you really have no clue, click on the question to reveal the answer...';
    container.appendChild(hint);

    const game = document.createElement('div');
    game.className = 'game';
    container.appendChild(game);

    // get data from API
    game.textContent = 'Loading...';
    let data = await getData(game);
    console.log(data);
    // put questions to page
    createGame(data, game);
}

async function getData(errorHolder) {
    try {
        let response = await fetch('https://opentdb.com/api.php?amount=5');
        let data = await response.json();
        errorHolder.textContent = '';
        errorHolder.className = 'game';
        return data.results;
    } catch(error) {
        errorHolder.classList.add('error');
        errorHolder.textContent = 'Failed to load questions...';
        console.log(error);
    }       
}

function createGame(data, gameHolder) {
    data.forEach((item, index) => {
        let question = document.createElement('div');
        question.textContent = item.question;
        question.className = 'question';
        question.id = index;
        let answer = document.createElement('div');
        answer.textContent = item.correct_answer;
        answer.className = 'answer';
        answer.id = `answer${index}`;
        gameHolder.appendChild(question);
        gameHolder.appendChild(answer);
    });
}

window.onload = main;