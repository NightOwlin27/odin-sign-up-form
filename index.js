const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.modal-btn');
const submitBtn = document.querySelector('.submit-btn');
const mainForm = document.querySelector('.main-form');
const modalForm = document.querySelector('.modal-form');
const modalText = document.querySelector('.modal-text');

setTimeout(function() {
    modal.style.display = 'inline';
}, 2000);

modalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
})

mainForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your submission!');
})

modalForm.addEventListener('submit', function(event) {
    event.preventDefault();
    modalText.innerHTML = `<div class="inner-loading">
                                <img src="loading.svg">
                                <p class='inner-text'>Uploading data...(not really)</p>
                            </div>`

    setTimeout(function() {
        modal.style.height = '500px'
        modalText.textContent = `Welcome to the Techno Viking Community!`
        modalForm.innerHTML = `<img src="images/techno-viking.gif" class="techno-viking"
                                alt="a shirtless man dancing in the street">`
    }, 3000);
})




