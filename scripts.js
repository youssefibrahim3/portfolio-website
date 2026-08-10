const skillButtons = document.querySelectorAll('.skillbutton');
const skillPanels = document.querySelectorAll('.skill-panel');
const activeLabel = document.querySelector('.active-skill-label');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;

        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        tabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.dataset.panel === targetTab);
        });

        activeLabel.textContent = button.textContent;
    });
});