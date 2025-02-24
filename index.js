function generatePoem (event){
    event.preventDefault();

    new Typewriter('#poem', {
        strings: "I must go down to the seas again, to the lonely sea and the sky",
        autoStart: true,
        display: 1,
        cursor: "",
      });
    
}


let poemFormElement= document.querySelector("#generator-poem-form")
poemFormElement.addEventListener("submit", generatePoem)

