
/* Intersection Observer Constuctor and callback function */

function createObserver() {
  let observer;

  let options = {
    root: null,
    threshold: 0.25
  }; 

  let observer = new IntersectionObserver(callback, options);
} 

/* Handling intersection changes*/

function intersectionHandler(entries, observer) {
  entries.forEach(entry => {
      //   entry.isIntersecting]
      if (entry.isIntersecting) {
          // active if intersecting
          function toggleHighlight() {
            document.querySelector("span.highlight").classList.toggle("active");
          }
      } else {
          // remove active if no longer intersecting 
          entry.target.classList.remove("active");
      }
    });
}

let observer = new IntersectionObserver(intersectionHandler, options);


 /* Targeting highlight to be observed */

 let target = document.querySelectorAll("span.highlight");

 /* Observe each highlighted span */

 images.forEach((span) => {
  observer.observe(span);
});

/* Button Transformation Effect */
function toggleButton () {
  document.querySelector("button").classList.toggle("active");
  document.querySelector("button").addEventListener("click", toggleButton);
}




 

