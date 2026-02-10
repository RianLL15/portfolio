const experiencias = [
    {
        cargo: "Projetista",
        empresa: "Escritório de Planejamento",
        tipo: "Estágio",
        periodo: "Abr 2018 - Jun 2021 (2 anos e 3 meses)",
        cidade: "Florianópolis, SC",
        detalhe: "Projetos e planejamento estrutural"
    },
    {
        cargo: "Estudante de Ciência da Computação",
        empresa: "Projetos acadêmicos e autorais",
        tipo: "Formação em andamento",
        periodo: "2022 - Atual",
        cidade: "Florianópolis, SC",
        detalhe: "Projetos em desenvolvimento de software, dados e automação"
    }
];

function renderizarTrajetoria() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    [...experiencias].reverse().forEach((exp) => {
        const card = document.createElement('article');
        card.className = 'exp-card';

        card.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="exp-header">
                <h3>${exp.cargo}</h3>
            </div>
            <div class="exp-info"><strong>${exp.empresa}</strong> · ${exp.tipo}</div>
            <div class="exp-info">Período: ${exp.periodo}</div>
            <div class="exp-info">Local: ${exp.cidade}</div>
            <div class="exp-tag">${exp.detalhe}</div>
        `;

        timeline.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderizarTrajetoria);
