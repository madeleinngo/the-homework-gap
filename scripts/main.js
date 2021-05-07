function toggleHighlight() {
    document.querySelector("span.highlight").classList.toggle("active");
  }
  
  document.querySelector("button").addEventListener("click", toggleHighlight);