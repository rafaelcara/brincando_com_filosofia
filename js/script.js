
document.addEventListener('DOMContentLoaded', () => {


    const title = document.getElementById('main-title');
    const socratesQuote = document.getElementById('socrates-quote');
    let clickCount = 0;

    title.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 3) {
            socratesQuote.classList.remove('hidden');
            
            console.log('Você encontrou a sabedoria de Sócrates!');
            
            clickCount = 0;
        }
    });


    console.log('Olá, filósofo! 🦉');
    console.log('Você saiu da caverna de Platão.');
    console.log('O que você vê no console é real ou são apenas sombras na parede?');

});