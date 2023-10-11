const newButton = document.createElement('button');
newButton.textContent = 'Click me!';
newButton.classList.add("cta-button");
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
    window.location.href = "https://www.vistaprint.com/design";
  });


