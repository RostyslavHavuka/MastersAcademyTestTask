document.addEventListener('DOMContentLoaded', () => {
  const myInput = document.getElementById('myinput');
  const inputValue = document.getElementById('inputValue');
  const btn = document.getElementById('btn');

  function clearClasslist(element) {
    element.classList.remove(...element.classList);
  }

  function click(event) {
    if (!(event.key === 'Enter' || event.type === 'mouseup')) return undefined;

    inputValue.innerText = myInput.value;
    myInput.value = '';

    clearClasslist(inputValue);

    if (/!|@|#|\$|&|\*|%/gi.test(inputValue.innerText)) return inputValue.classList.add('red');
    inputValue.classList.remove('red');

    if (inputValue.innerText.length > 3) return inputValue.classList.add('green');
    inputValue.classList.remove('green');

    return undefined;
  }

  myInput.addEventListener('keypress', click);
  btn.addEventListener('keypress', click);
  btn.addEventListener('mouseup', click);
});
