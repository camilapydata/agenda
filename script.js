let atividades = JSON.parse(localStorage.getItem("agendaLeticia")) || [];

function adicionar() {
    const titulo = document.getElementById("titulo").value.trim();
    const tipo = document.getElementById("tipo").value;
    const data = document.getElementById("data").value;
    const hora = document.getElementById("hora").value;

    if (!titulo || !data || !hora) {
        alert("Preencha todos os campos!");
        return;
    }

    atividades.push({ titulo, tipo, data, hora });

    localStorage.setItem("agendaLeticia", JSON.stringify(atividades));

    document.getElementById("titulo").value = "";
    renderizar();
}

function renderizar() {
    const lista = document.getElementById("atividades");
    lista.innerHTML = "";

    atividades.forEach((a, index) => {
        const li = document.createElement("li");
        li.classList.add(a.tipo);
        li.innerHTML = `
            <strong>${a.titulo}</strong><br>
            ${a.tipo} • ${formatarData(a.data)} • ${a.hora}
        `;
        lista.appendChild(li);
    });
}

function formatarData(data) {
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

renderizar();
