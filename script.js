function preencherEmail() {
    document.getElementById('email').value += "@gmail.com";
};

function preencherYahoo() {
    document.getElementById('email').value += "@yahoo.com";
};

function preencherHotmail() {
    document.getElementById('email').value += "@hotmail.com";
};

function continuar(event) {
    const senha = document.getElementById("senha").value;
    const confSenha = document.getElementById("confsenha").value;
    const erroCampo = document.getElementById("errosenha");

    if (senha.length < 8) {
        erroCampo.textContent = "A senha deve conter no mínimo 8 caracteres";
        event.preventDefault();
        return false;
    }

    if (senha !== confSenha) {
        erroCampo.textContent = "As senhas devem ser as mesmas";
        event.preventDefault();
        return false;
    }

    const username = document.getElementById("user").value;
    localStorage.setItem("nomeUsuario", username);
    window.location.href = "catalogo.html";
    return false;

};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('user').value;
    localStorage.setItem('nomeUsuario', username);
    
    window.location.href = 'catalogo.html';
});

window.onload = function () {
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    const campoSaudacao = document.getElementById("saudacao");

    if (nomeSalvo && campoSaudacao) {
        campoSaudacao.textContent = `Olá, ${nomeSalvo}!`;
    } else if (campoSaudacao) {
        campoSaudacao.textContent = "Olá!";
    }
};

document.getElementById('formPesquisar').addEventListener("submit", function (e) {
    e.preventDefault();

    const termo = document.getElementById("pesquisar").value.trim().toLowerCase();

    if (termo === "it") {
        window.location.href = "resultados.html";
    }
});

function carregarVideo() {
    const container = document.getElementById("videoContainer");
    container.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/hdCIZK2zcYw?autoplay=1&rel=0&modestbranding=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen 
            style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;">
        </iframe>
    `;
}
function carregarEps() {
    const container = document.getElementById("epsContainer");
    container.innerHTML = `
        <div class="episodios">
        <select name="Temporada" id="temporadaSelect">
            <option value="1">Temporada 1</option>
        </select>
        
            <div class="slideEpisodios">
                <div class="card-filmeEpisodios">
                    <a href="#">
                        <img src="https://m.media-amazon.com/images/M/MV5BYTdlNzkyYjktOTUyMC00MzM4LTgxMTYtZmRhMzA5YzUyZWZlXkEyXkFqcGc@._V1_QL75_UX328_.jpg"
                            alt="E1S1" class="filmeRecomendado">
                        <div class="info-card">
                            <p class="titulo">The Pilot</p>
                            <p class="ano-classificacao">54 min | S1E1</p>
                        </div>
                    </a>
                </div>
                <div class="card-filmeEpisodios">
                    <a href="#">
                        <img src="https://m.media-amazon.com/images/M/MV5BMzZkMDVhZjYtZGYwNy00NjM2LThmN2MtODdmODRmMTMyODI4XkEyXkFqcGc@._V1_QL75_UX328_.jpg" alt="S1E2"
                            class="catalogofilme">
                        <div class="info-card">
                            <p class="titulo">The Thing in the Dark</p>
                            <p class="ano-classificacao">1h6min| S1E2</p>
                        </div>
                    </a>
                </div>
                <div class="card-filmeEpisodios">
                    <a href="#">
                        <img src="https://m.media-amazon.com/images/M/MV5BYzMzMmM1YzctMjBhYS00MDZjLWJlZjYtNGViNjdjZWYzZTdlXkEyXkFqcGc@._V1_QL75_UX388_.jpg" alt="S1E3"
                            class="catalogofilme">
                        <div class="info-card">
                            <p class="titulo">Now You See It</p>
                            <p class="ano-classificacao">58min| S1E3</p>
                        </div>
                    </a>
                </div>
                <div class="card-filmeEpisodios">
                    <a href="#">
                        <img src="https://m.media-amazon.com/images/M/MV5BY2JjNDMzYjEtZDkzNS00ZmQzLWFmZjEtMmMxNjExNzYxNGI0XkEyXkFqcGc@._V1_QL75_UX388_.jpg" alt="S1E4"
                            class="catalogofilme">
                        <div class="info-card">
                            <p class="titulo">The Great Swirling Apparatus of Our Planet's Function</p>
                            <p class="ano-classificacao">1h02min | S1E4</p>
                        </div>
                    </a>
                </div>
                <div class="card-filmeEpisodios">
                    <a href="#">
                        <img src="https://m.media-amazon.com/images/M/MV5BNTkyNjU1ODgtOTljMS00NWZmLTlkMDEtMTE4NGZjOTQyNWY1XkEyXkFqcGc@._V1_QL75_UX350_.jpg" alt="S1E5"
                            class="catalogofilme">
                        <div class="info-card">
                            <p class="titulo">29 Neilbolt Street</p>
                            <p class="ano-classificacao">55min| S1E5</p>
                        </div>
                    </a>
                </div>
                <div class="card-filmeEpisodios">
                    <a href="#">
                        <img src="https://m.media-amazon.com/images/M/MV5BZDQzZGM2YjUtYTFiNS00MzZkLTlkYzgtMWQzYzg1OTllMzIwXkEyXkFqcGc@._V1_QL75_UX291_.jpg" alt="S1E6"
                            class="catalogofilme">
                        <div class="info-card">
                            <p class="titulo">In the Name of the Father</p>
                            <p class="ano-classificacao">56min| S1E6</p>
                        </div>
                    </a>
                </div>
                <div class="card-filmeEpisodios">
                    <a href="#">
                        <img src="https://m.media-amazon.com/images/M/MV5BYmRmMDQ0ZjctZWIzYi00M2VlLWJlNzgtY2Q3NTNlZjE1NTU1XkEyXkFqcGc@._V1_QL75_UX328_.jpg" alt="S1E7"
                            class="catalogofilme">
                        <div class="info-card">
                            <p class="titulo">The Black Spot</p>
                            <p class="ano-classificacao">1h03min | S1E7</p>
                   </div>
                    </a>
                </div>


            </div>
        </div>
    `;
}