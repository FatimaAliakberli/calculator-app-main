const element = document.getElementById("display");

function appendToDisplay(value){
    element.value += value;
}

function clearDisplay(){
    element.value = "";
}

function deleteLast(){
    element.value = element.value.substring(0, element.value.length - 1);
}

function calculateResult(){
    const expression = element.value.replace(/x/g, '*');
    element.value = eval(expression);
}


const themeSwitchers = document.querySelectorAll('.switch-input');

themeSwitchers.forEach((input) => {
    input.addEventListener('change', (e) => {
        document.body.classList.remove('theme-1', 'theme-2', 'theme-3'); // Remove previous theme
        document.body.classList.add(`theme-${e.target.id.replace('theme', '')}`); // Add new theme
    });
});
