document.addEventListener("mousemove", (e) => {
  // create dot
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // place it at mouse position
  dot.style.left = `${e.pageX - 5}px`; 
  dot.style.top = `${e.pageY - 5}px`;

  document.body.appendChild(dot);

  // after short time fade out
  setTimeout(() => {
    dot.style.opacity = "0";
  }, 100);

  // remove from DOM after fade
  setTimeout(() => {
    dot.remove();
  }, 800);
});
