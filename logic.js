const btn1 = document.getElementById('btn1');
let myContainer = document.querySelector('.container');
let text1 = document.querySelector('#text1');
let newItem = document.querySelector('#contentArea');

btn1.addEventListener('click', () => {
    console.log(text1.value);
    let newItem = document.createElement('div');
    let inputValue = text1.value;
    newItem.textContent = inputValue;
    contentArea.appendChild(newItem);
    text1.value = '';
});
