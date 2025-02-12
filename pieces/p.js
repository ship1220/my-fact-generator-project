const facts = [
    "A 19-year-old girl with a passion for painting and art, driven by an adventurous spirit.",
    "A cat lover whose affection for felines often inspires her artistic creations.",
    "An adventure seeker who constantly explores new challenges and experiences through art and life."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}
