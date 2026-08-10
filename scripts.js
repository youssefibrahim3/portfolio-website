// Skills section of About Me
const skillButtons = document.querySelectorAll('.skillbutton');
const skillPanels = document.querySelectorAll('.skill-panel');

skillButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;

        skillButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        skillPanels.forEach(panel => {
            panel.classList.toggle('active', panel.dataset.panel === targetTab);
        });
    });
});