const countText = document.getElementById('count');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

let count; 

if (localStorage.getItem('count') === null) {
    count = 0;
} else {
    count = localStorage.getItem('count');
}

countText.textContent = count; 


function updateCount() {
    countText.textContent = count; 
    localStorage.setItem('count', count); 
}


plusButton.onclick = function() {
    count++;
    updateCount();
};

minusButton.onclick = function() {
    count--;
    updateCount();
};
