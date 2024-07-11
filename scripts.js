const words = [
    {
        word: "Serendipity",
        definition: "The occurrence of events by chance in a happy or beneficial way.",
        example: "Meeting her was pure serendipity.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/serendipity--_us_1.mp3"
    },
    {
        word: "Ephemeral",
        definition: "Lasting for a very short time.",
        example: "The beauty of the sunset was ephemeral.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/ephemeral--_us_1.mp3"
    },
    {
        word: "Quintessential",
        definition: "Representing the most perfect or typical example of a quality or class.",
        example: "He was the quintessential gentleman.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/quintessential--_us_1.mp3"
    },
    {
        word: "Mellifluous",
        definition: "Sweet or musical; pleasant to hear.",
        example: "Her mellifluous voice charmed everyone.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/mellifluous--_us_1.mp3"
    },
    {
        word: "Solitude",
        definition: "The state or situation of being alone.",
        example: "She savored the solitude of the mountains.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/solitude--_us_1.mp3"
    },
    {
        word: "Luminous",
        definition: "Emitting or reflecting light, glowing; illuminating.",
        example: "The luminous moon lit up the night sky.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/luminous--_us_1.mp3"
    },
    {
        word: "Ebullient",
        definition: "Cheerful and full of energy.",
        example: "Her ebullient personality made everyone smile.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/ebullient--_us_1.mp3"
    },
    {
        word: "Ineffable",
        definition: "Too great or extreme to be expressed or described in words.",
        example: "The beauty of the sunset was ineffable.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/ineffable--_us_1.mp3"
    },
    {
        word: "Petrichor",
        definition: "The pleasant, earthy smell after rain.",
        example: "The petrichor filled the air after the summer storm.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/petrichor--_us_1.mp3"
    },
    {
        word: "Halcyon",
        definition: "Denoting a period of time in the past that was idyllically happy and peaceful.",
        example: "The halcyon days of youth are often remembered fondly.",
        audio: "https://ssl.gstatic.com/dictionary/static/sounds/oxford/halcyon--_us_1.mp3"
    }
];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function displayWord(wordObject) {
    const wordElement = document.getElementById("word");
    const definitionElement = document.getElementById("definition");
    const exampleElement = document.getElementById("example");
    const audioButton = document.getElementById("audio-button");

    wordElement.textContent = wordObject.word;
    definitionElement.textContent = wordObject.definition;
    exampleElement.textContent = wordObject.example;

    audioButton.onclick = () => {
        const audio = new Audio(wordObject.audio);
        audio.play();
    };
}

document.getElementById("random-word-button").addEventListener("click", () => {
    const randomWord = getRandomWord();
    displayWord(randomWord);
});

// Display the initial word of the day
const initialWord = getRandomWord();
displayWord(initialWord);
