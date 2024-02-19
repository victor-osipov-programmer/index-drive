const filials = document.querySelectorAll('.filial');
const block = document.querySelector('.selected-filial');

for (let filial of filials) {
    filial.addEventListener('click', () => {
        block.classList.add('active')
    })
}