function getComputerChoice(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const options = ['rock', 'paper', 'scissors'];

const result = getComputerChoice(options);
console.log(result);
