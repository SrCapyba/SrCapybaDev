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

    // Seleciona a foto e o vídeo
    const fotoContainer = document.querySelector('.foto-container');
    const backgroundVideo = document.querySelector('.background-video');
    const backgroundAudio = document.querySelector('.background-audio');

    // Adiciona o evento de mouseover para reproduzir o vídeo
    fotoContainer.addEventListener('mouseover', () => {
        backgroundVideo.play(); // Reproduz o vídeo
        backgroundAudio.play(); // Reproduz o áudio
    });

    // Adiciona o evento de mouseout para pausar o vídeo
    fotoContainer.addEventListener('mouseout', () => {
        backgroundVideo.pause(); // Pausa o vídeo
        backgroundVideo.currentTime = 0; // Reinicia o vídeo
        backgroundAudio.pause(); // Reproduz o áudio
        backgroundAudio.currentTime = 0; // Reinicia o áudio
    });

    const scrollToTopButton = document.getElementById('scroll-to-top');

    // Mostra ou esconde o botão com base na rolagem
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = document.documentElement.clientHeight;

        if (scrollPosition > viewportHeight * 0.2) { // 20% da altura da página
            scrollToTopButton.style.display = 'flex'; // Mostra o botão
        } else {
            scrollToTopButton.style.display = 'none'; // Esconde o botão
        }
    });

    // Rola para o topo ao clicar no botão
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rola suavemente
        });
    });
});