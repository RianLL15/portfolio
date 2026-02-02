const experiencias = [
    {
        cargo: "Projetista",
        empresa: "Escritório de Planejamento",
        tipo: "Estágio",
        periodo: "Abr de 2018 - Jun de 2021 (2 anos 3 meses)",
        cidade: "Florianóis, SC",
        detalhe: "Projetos e Planejamento Estrutural",
        icon: "📐"
    }

]

function renderizarTrajetoria() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = '';

    const experienciasOrdenadas = [...experiencias].reverse();

    experienciasOrdenadas.forEach((exp, index) => {
        const card = document.createElement('div');

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

renderizarTrajetoria();