let speech =  new SpeechSynthesisUtterance();
let clickButton = document.querySelector("button");
let textareaEl = document.querySelector("textarea");


let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  
  voices.forEach((voice, i) =>(voiceSelect.options[i]) = new Option(voice.name, i))
}

voiceSelect.addEventListener("change", ()=>{
  speech.voice = voices[voiceSelect.value];
})


clickButton.addEventListener("click", ()=>{
  speech.text = textareaEl.value;
  window.speechSynthesis.speak(speech);
})