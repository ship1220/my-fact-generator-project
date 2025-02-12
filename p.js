const facts = [
    "She loves to paint.",
    "She's driven by an adventurous spirit.",
    "She's a cat lover whose affection for felines often inspires her artistic creations.",
    "She's an adventure seeker who constantly explores new challenges and experiences.",
    "She loves visiting museums alone",
    "She has made 20 mandala pieces in a day",
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}
