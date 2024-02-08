const buttonElement = document.getElementById('secret-button');
const buttonElement2 = document.getElementById('secret-button2');
const pElement = document.getElementById('secret-p');

function handleClick(event) {
  pElement.innerText = 'Button 1 was clicked!';
}

buttonElement.addEventListener('click', handleClick);

// Later in your code...
buttonElement2.addEventListener('click', (event) => {
  pElement.innerText = 'Button 2 was clicked';

  // Remove the click event listener
  buttonElement.removeEventListener('click', handleClick);
});
