const nav = document.querySelector('.form__nav');
if (nav) defineNav(nav);

function defineNav(nav) {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        const clicked_button = e.target.closest('[data-activate]');
        const block_need_activate = document.getElementById(clicked_button.dataset.activate);
        clicked_button.classList.add('active');
        block_need_activate.classList.add('active');

        const buttons = document.querySelectorAll('[data-activate]');
        buttons.forEach(button => {
            if (button != clicked_button) {
                button.classList.remove('active');

                const block = document.getElementById(button.dataset.activate);
                block.classList.remove('active');
            }
        })
    })
}