// event listener listens for load event (all resources done loading event), then runs function, defined by () => 
// querySelector selects first element in document with class loader
// classList.add adds class loader--hidden to loader element
// addEventListener listens for transitionend event, then runs function
// transitionend event is when the transition ends for the loader element (transition is the fade out from css) 
// removeChild removes the loader element from the document body

// This line adds an event listener to the 'load' event of the window.
window.addEventListener("load", () => {
  
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
    
  });
  