// Aguarda o conteúdo da página carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- Easter Egg 1: O Clique Socrático ---
    // O usuário deve clicar no título principal 3 vezes.

    const title = document.getElementById('main-title');
    const socratesQuote = document.getElementById('socrates-quote');
    let clickCount = 0;

    title.addEventListener('click', () => {
        clickCount++;

        // Se o usuário clicar 3 vezes...
        if (clickCount === 3) {
            // ...revela a citação de Sócrates
            socratesQuote.classList.remove('hidden');
            
            // Loga uma mensagem bônus no console
            console.log('Você encontrou a sabedoria de Sócrates!');
            
            // Reseta o contador para não ficar acumulando
            clickCount = 0;
        }
    });


    // --- Easter Egg 2: A Caverna de Platão ---
    // Este é um clássico: uma mensagem escondida no console do desenvolvedor.
    // (Para ver, clique com o botão direito > Inspecionar > Console)

    console.log('Olá, filósofo! 🦉');
    console.log('Você saiu da caverna de Platão.');
    console.log('O que você vê no console é real ou são apenas sombras na parede?');

});