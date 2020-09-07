document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('textInput');
  const textOutput = document.getElementById('textOutput');
  const button = document.getElementById('button');

  function setValue(textOutput, textInput) {
    textOutput.innerText = textInput.value;
    textInput.value = '';
  }
  function clearClasses(element) {
    element.classList.remove(...element.classList);
  }
  function setColor(element) {
    if (/!|@|#|\$|&|\*|%/gi.test(element.innerText)) return element.classList.add('red');
    element.classList.remove('red');
    if (element.innerText.length > 3) return element.classList.add('green');
    element.classList.remove('green');
  }

  function clickHandler(event) {
    if (!(event.key === 'Enter' || event.type === 'mouseup')) return undefined;
    setValue(textOutput, textInput);
    clearClasses(textOutput);
    setColor(textOutput);
  }

  textInput.addEventListener('keypress', clickHandler);
  button.addEventListener('keypress', clickHandler);
  button.addEventListener('mouseup', clickHandler);
});

