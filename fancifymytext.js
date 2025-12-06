function showAlert() {
  alert("Hello, world!");
}

// Make the text bigger (24pt) when the Bigger button is clicked
function makeBigger() { 
  showAlert();
  const text = document.getElementById("textArea");
  text.style.fontSize = "24pt";
}

// Apply FancyShmancy styles
function setFancy() {
  const text = document.getElementById("textArea");
  const fancy = document.getElementById("fancyRadio");

  if (fancy.checked) {
    alert("Fancifying!");
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
  }
}

// Go back to normal when BoringBetty is selected
function setBoring() {
  const text = document.getElementById("textArea");
  const boring = document.getElementById("boringRadio");

  if (boring.checked) {
    alert("Boring mode");
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
  }
}

// Uppercase the text and add "-Moo" to the last word of each sentence
function moo() {
  const textArea = document.getElementById("textArea");

  // Uppercase everything
  let text = textArea.value.toUpperCase();

  // Split into sentences by "."
  let sentences = text.split(".");

  for (let i = 0; i < sentences.length; i++) {
    let s = sentences[i].trim();
    if (s.length === 0) continue;

    // Split into words and modify the last one
    let words = s.split(" ");
    words[words.length - 1] = words[words.length - 1] + "-Moo";
    sentences[i] = words.join(" ");
  }

  // Join sentences back together
  textArea.value =
    sentences.filter(s => s.trim().length > 0).join(". ") + ".";
}