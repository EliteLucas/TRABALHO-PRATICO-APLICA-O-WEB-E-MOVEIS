document.addEventListener('DOMContentLoaded', function () {
    const buttonTheme = document.getElementById('buttonTheme');
    const icon = document.getElementById('themeIcon');

    var light = true;

    function changeTheme() {
        if (light) {
            icon.src = "images/tema-claro.png"
            document.body.classList.add('dark-mode');
        } else {
            icon.src = "images/tema-escuro.png"
            document.body.classList.remove('dark-mode');
        }

        light = !light;
    }

    buttonTheme.addEventListener("click", changeTheme);

    const album = document.getElementById("album-bad-bunny");

    if (album) {
        album.addEventListener("click", () => {
            const audio = document.getElementById("dtmfAudio");
            const playIcon = document.querySelector(".play-icon");

            audio.volume = 0.5;

            if (audio.paused) {
                audio.play();
                playIcon.textContent = "⏸";
            } else {
                audio.pause();
                playIcon.textContent = "▶";
            }
        });
    }


    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome === "" || email === "" || mensagem === "") {
            status.innerText = "Por favor, preencha todos os campos.";
            status.style.color = "red";
            return;
        }

        status.innerText = "Enviando...";
        status.style.color = "var(--accent-color)";

        setTimeout(() => {
            status.innerText = `Obrigado, ${nome}! Sua mensagem foi enviada (simulação).`;
            form.reset();
        }, 2000);
    });
});