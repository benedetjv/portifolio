// Toggle do footer (index.html)
const toggleBtn = document.getElementById('toggleFooterBtn');
const footer = document.getElementById('footerFull');

if (toggleBtn && footer) {
  toggleBtn.addEventListener('click', () => {
    footer.classList.toggle('show');
  });
}

// Transição suave ao carregar a página (contato.html)
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Voltar para a home com fade-out
const btnVoltar = document.getElementById('btnVoltar');
if (btnVoltar) {
  btnVoltar.addEventListener('click', function (e) {
    e.preventDefault();
    document.body.classList.remove('loaded');
    document.body.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
  });
}

// Projetos

document.addEventListener('DOMContentLoaded', () => {
  const btnVoltar = document.getElementById('btnVoltar');
  const imagemModal = new bootstrap.Modal(document.getElementById('imagemModal'));
  const imagemExpandida = document.getElementById('imagemExpandida');
  const btnProxima = document.getElementById('proxima');
  const btnAnterior = document.getElementById('anterior');

  let imagens = [];
  let indiceAtual = 0;

  // Transição suave ao voltar à página inicial
  if (btnVoltar) {
    btnVoltar.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.remove('loaded');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = "index.html";
      }, 500);
    });
  }

  // Coletar todos os blocos de projeto
  const projetos = document.querySelectorAll('.projeto');

  projetos.forEach(projeto => {
    const principal = projeto.querySelector('.imagem-principal');
    const thumbs = projeto.querySelectorAll('.miniatura');

    const grupoImagens = [principal, ...thumbs].map(img => img.src);

    // Imagem principal clicável
    if (principal) {
      principal.addEventListener('click', () => {
        imagens = grupoImagens;
        indiceAtual = 0;
        imagemExpandida.src = imagens[indiceAtual];
        imagemModal.show();
      });
    }

    // Miniaturas clicáveis
    thumbs.forEach((img, index) => {
      img.addEventListener('click', () => {
        imagens = grupoImagens;
        indiceAtual = index + 1;
        imagemExpandida.src = imagens[indiceAtual];
        imagemModal.show();
      });
    });
  });

  // Botão próxima imagem
  if (btnProxima) {
    btnProxima.addEventListener('click', () => {
      if (imagens.length) {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        imagemExpandida.src = imagens[indiceAtual];
      }
    });
  }

  // Botão imagem anterior
  if (btnAnterior) {
    btnAnterior.addEventListener('click', () => {
      if (imagens.length) {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
        imagemExpandida.src = imagens[indiceAtual];
      }
    });
  }
});
