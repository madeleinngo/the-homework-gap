
/* Intersection Observer Constructor and callback function */

  let options = {
    root: null,
    threshold: 0.25
  }; 


/* Handling intersection changes */

function intersectionHandler(entries, observer) {
  entries.forEach(entry => {
      //   entry.isIntersecting]
      if (entry.isIntersecting) {
          // active if intersecting
            entry.target.classList.add("active");
            console.log(entry.target)
      } else {
          // remove active if no longer intersecting 
          entry.target.classList.remove("active");
      }
    });
}

let observer = new IntersectionObserver(intersectionHandler, options);


 /* Targeting highlight to be observed */

 let spans = document.querySelectorAll("span.highlight");
console.log(spans)

 /* Observe each highlighted span */

 spans.forEach((span) => {
  observer.observe(span);
});

/* Doors Animation Effect */

function openDoors() {
  document.querySelector(".doors").classList.add("active");
  setTimeout(() => {
    document.querySelector(".doors").style.display = "none";
    document.querySelector("button").style.display = "none";
  }, 1000);
}


 

