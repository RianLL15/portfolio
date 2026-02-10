const meusCursos = [
    {
        titulo: "Python para Análise de Dados",
        instituicao: "Data Science Academy",
        status: "concluido",
        descricao: "Formação focada em manipulação de dados, estatística aplicada e criação de análises com bibliotecas do ecossistema Python.",
        data: "Jan 2024 - Mar 2024",
        tecnologias: ["Python", "Pandas", "NumPy"]
    },
    {
        titulo: "Java e Programação Orientada a Objetos",
        instituicao: "Udemy",
        status: "em-progresso",
        descricao: "Estudo contínuo de fundamentos de orientação a objetos, boas práticas de arquitetura e desenvolvimento de aplicações robustas.",
        data: "Jun 2024 - Atual",
        tecnologias: ["Java", "POO", "Clean Code"]
    },
    {
        titulo: "Especialista em SQL",
        instituicao: "Alura",
        status: "para-iniciar",
        descricao: "Trilha prevista para aprofundamento em modelagem relacional, otimização de consultas e integração com ferramentas analíticas.",
        data: "Planejado para 2026",
        tecnologias: ["SQL", "Modelagem de Dados"]
    }
];

function renderCursos(filter = 'all') {
    const list = document.getElementById('course-list');
    if (!list) return;

    list.innerHTML = '';

    const cursosFiltrados = meusCursos.filter(
        (curso) => filter === 'all' || curso.status === filter
    );

    if (!cursosFiltrados.length) {
        list.innerHTML = '<p class="course-desc">Nenhum curso encontrado para este filtro.</p>';
        return;
    }

    cursosFiltrados.forEach(curso => {
        const statusLabel = curso.status === 'concluido'
            ? 'Concluído'
            : curso.status === 'em-progresso'
                ? 'Em Progresso'
                : 'Para Iniciar';

        list.innerHTML += `
            <article class="course-card border-${curso.status}">
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
            </article>
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
