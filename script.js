const quotes = [
  "Believe in yourself!",
  "Keep going. You’re doing great!",
  "Every day is a second chance.",
  "You are capable of amazing things.",
  "Don’t watch the clock; do what it does. Keep going.",
];

function generateQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
}
