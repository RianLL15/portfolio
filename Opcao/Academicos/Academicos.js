const meusProjetos = [
    {
        titulo: "Análise de Dados Acadêmicos",
        descricao: "Script em Python para processar dados de desempenho estudantil e gerar indicadores para tomada de decisão.",
        categoria: "academico",
        imagens: ["../../Imagens/download.png", "../../Imagens/d.png"],
        tags: ["Python", "Pandas"]
    },
    {
        titulo: "Automação de Planilhas Financeiras",
        descricao: "Projeto pessoal para consolidar gastos, categorizar lançamentos e apoiar visualizações em dashboard no Excel.",
        categoria: "pessoal",
        imagens: [],
        tags: ["Excel", "VBA"]
    }
];

function renderProjetos(filter = 'all') {
    const list = document.getElementById('project-list');
    if (!list) return;

    list.innerHTML = '';

    const projetosFiltrados = meusProjetos.filter(
        (proj) => filter === 'all' || proj.categoria === filter
    );

    if (!projetosFiltrados.length) {
        list.innerHTML = '<p class="no-image">Nenhum projeto encontrado para este filtro.</p>';
        return;
    }

    projetosFiltrados.forEach((proj, index) => {
        const tagClass = proj.categoria === 'academico' ? 'tag-tipo-ac' : 'tag-tipo-ps';
        const tagText = proj.categoria === 'academico' ? '📚 Faculdade' : '💡 Pessoal';

        let areaImagem = '';
        if (proj.imagens && proj.imagens.length > 0) {
            if (proj.imagens.length === 1) {
                areaImagem = `<img src="${proj.imagens[0]}" class="project-photo" alt="Imagem do projeto ${proj.titulo}">`;
            } else {
                const slides = proj.imagens.map((img, i) =>
                    `<img src="${img}" class="slide project-photo ${i === 0 ? 'active' : ''}" alt="Slide ${i + 1} do projeto ${proj.titulo}">`
                ).join('');

                areaImagem = `
                    <div class="carousel" id="carousel-${index}">
                        ${slides}
                        <button class="prev" type="button" aria-label="Slide anterior" onclick="moveSlide(${index}, -1)">&#10094;</button>
                        <button class="next" type="button" aria-label="Próximo slide" onclick="moveSlide(${index}, 1)">&#10095;</button>
                    </div>
                `;
            }
        } else {
            areaImagem = '<div class="no-image">Sem imagem disponível</div>';
        }

        list.innerHTML += `
            <article class="project-card ${proj.categoria}">
                <div class="image-container">${areaImagem}</div>
                <div class="project-content">
                    <div class="tags-container">
                        <span class="tag ${tagClass}">${tagText}</span>
                        ${proj.tags.map(t => `<span class="tag tag-tech">${t}</span>`).join('')}
                    </div>
                    <h3>${proj.titulo}</h3>
                    <p>${proj.descricao}</p>
                </div>
            </article>
        `;
    });
}

function moveSlide(projIndex, direction) {
    const container = document.getElementById(`carousel-${projIndex}`);
    if (!container) return;

    const slides = container.querySelectorAll('.slide');
    let activeIndex = Array.from(slides).findIndex(s => s.classList.contains('active'));

    slides[activeIndex].classList.remove('active');

    activeIndex += direction;

    if (activeIndex >= slides.length) activeIndex = 0;
    if (activeIndex < 0) activeIndex = slides.length - 1;

    slides[activeIndex].classList.add('active');
}

function updateFilter(category, button) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderProjetos(category);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjetos();
});
