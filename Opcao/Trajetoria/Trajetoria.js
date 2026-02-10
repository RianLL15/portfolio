const experiencias = [
    {
        cargo: "Projetista",
        empresa: "Escritório de Planejamento",
        tipo: "Estágio",
        periodo: "Abr 2018 - Jun 2021 (2 anos e 3 meses)",
        cidade: "Florianópolis, SC",
        detalhe: "Projetos e Planejamento Estrutural",
        icon: "📐"
    },
    {
        cargo: "Estudante de Ciência da Computação",
        empresa: "Desenvolvimento Acadêmico e Projetos Autorais",
        tipo: "Formação",
        periodo: "2022 - Atual",
        cidade: "Florianópolis, SC",
        detalhe: "Projetos em Python, Java e automação de dados",
        icon: "💻"
    }
];

function renderizarTrajetoria() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    const experienciasOrdenadas = [...experiencias].reverse();

    experienciasOrdenadas.forEach((exp, index) => {
        const card = document.createElement('article');
        const isAlt = index % 2 !== 0;
        card.className = `exp-card ${isAlt ? 'alt-color' : ''}`;

        card.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="exp-header">
                <span class="exp-icon">${exp.icon}</span>
                <h3>${exp.cargo}</h3>
            </div>
            <div class="exp-info"><strong>${exp.empresa}</strong> • ${exp.tipo}</div>
            <div class="exp-info">📅 ${exp.periodo}</div>
            <div class="exp-info">📍 ${exp.cidade}</div>
            <div class="exp-tag"># ${exp.detalhe}</div>
        `;

        timeline.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarTrajetoria);
