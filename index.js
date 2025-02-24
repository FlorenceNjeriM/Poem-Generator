function displayPoem(response){
  new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}



function generatePoem (event){
    event.preventDefault();
let instructionsInput= document.querySelector("#instructions-input")
    let apiKey= "2c694e6242tb2c1do6178043fab30107";
    let prompt= `Generate a short English poem about ${instructionsInput.value}`;
    let context= "You're an AI assistant who can help me generate an English poem in HTML format. Do not write anything like ``html on top please.Do NOT put a title to the poem just begin writing the poem immediately.Sign Florence at the bottom of the poem and the word Flore should be <strong>Florence</strong>. The poem should be four lines long.";
    let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

   console.log(`prompt:${prompt}`);
   console.log(`context:${context}`)
    axios.get(apiUrl).then(displayPoem);
    
   
    
}


let poemFormElement= document.querySelector("#generator-poem-form")
poemFormElement.addEventListener("submit", generatePoem)

