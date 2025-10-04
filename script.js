document.addEventListener("mousemove", (e) => {
 
  const dot = document.createElement("div");
  dot.classList.add("dot");

  
  dot.style.left = `${e.pageX - 5}px`; 
  dot.style.top = `${e.pageY - 5}px`;

  document.body.appendChild(dot);

  
  setTimeout(() => {
    dot.style.opacity = "0";
  }, 100);

  
  setTimeout(() => {
    dot.remove();
  }, 800);
});
