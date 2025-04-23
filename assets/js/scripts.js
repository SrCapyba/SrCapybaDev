document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.nav-icon');
    const tooltip = document.getElementById('tooltip');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', (e) => {
            const tooltipText = e.target.getAttribute('data-tooltip');
            tooltip.textContent = tooltipText;
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        icon.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        });

        icon.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });

    const gifs = document.querySelectorAll('.gif');

    gifs.forEach(gif => {
        gif.addEventListener('mouseover', () => {
            gif.play(); // Inicia o GIF ao passar o mouse
        });

        gif.addEventListener('mouseout', () => {
            gif.pause(); // Pausa o GIF ao sair do mouse
            gif.currentTime = 0; // Reinicia o GIF
        });
    });
});