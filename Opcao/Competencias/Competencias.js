const meusCursos = [
    {
        titulo: "TextTextTex",
        instituicao: "TextTextTex",
        status: "concluido",
        descricao: "TextTextTexTextTextTex",
        data: "Jan 2024 - Mar 2024",
        tecnologias: ["Text"]
    },
    {
        titulo: "TextTextTex",
        instituicao: "TextText",
        status: "em-progresso",
        descricao: "TextTextTexTextTextTex",
        data: "Jun 2024 - Atual",
        tecnologias: ["TextT"]
    },
    {
        titulo: "Especialista SQL",
        instituicao: "TextTextTexTextTextTex",
        status: "para-iniciar",
        descricao: "TextTextTexTextTextTexTextTextTex",
        data: "Previsto para Ago 2024",
        tecnologias: ["TextTextTex", "TextTextTexTextTextTex"]
    }
];

function renderCursos(filter = 'all') {
    const list = document.getElementById('course-list');
    list.innerHTML = '';

    meusCursos.forEach(curso => {

        if (filter !== 'all' && curso.status !== filter) {
            return;
        }

        let statusLabel = curso.status === 'concluido' ? 'Concluído' :
            curso.status === 'em-progresso' ? 'Em Progresso' : 'Para Iniciar';

        list.innerHTML += `
            <div class="course-card border-${curso.status}">
                <div class="course-header">
                    <div>
                        <h3 class="course-title">${curso.titulo} <span class="status-badge bg-${curso.status}">${statusLabel}</span></h3>
                        <span class="institution color-${curso.status}">${curso.instituicao}</span>
                    </div>
                    <span style="color: #666; font-size: 0.85em; font-weight: bold;">📅 ${curso.data}</span>
                </div>
                <p class="course-desc">${curso.descricao}</p>
                <div class="tags-container">
                    ${curso.tecnologias.map(t => `<span class="tag-tech">${t}</span>`).join('')}
                </div>
            </div>
        `;
    });
}

function updateFilter(category, button) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    renderCursos(category);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCursos('all');
});