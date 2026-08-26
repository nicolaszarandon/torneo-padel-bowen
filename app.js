const parejas = [
    {
        id: 1,
        jugador1: "Lucas Gómez",
        jugador2: "Patricio Ruiz",
        categoria: "5ta",
        zona: "A"
    },
    {
        id: 2,
        jugador1: "Juan Vera",
        jugador2: "Martín Ortiz",
        categoria: "5ta",
        zona: "A"
    },
    {
        id: 3,
        jugador1: "Carlos Pérez",
        jugador2: "Diego López",
        categoria: "5ta",
        zona: "A"
    },
    {
        id: 4,
        jugador1: "Fernando Díaz",
        jugador2: "Pablo Torres",
        categoria: "5ta",
        zona: "A"
    },

    {
        id: 5,
        jugador1: "Pedro Silva",
        jugador2: "José Molina",
        categoria: "5ta",
        zona: "B"
    },
    {
        id: 6,
        jugador1: "Sergio Castro",
        jugador2: "Nicolás Ríos",
        categoria: "5ta",
        zona: "B"
    },
    {
        id: 7,
        jugador1: "Matías Sosa",
        jugador2: "Gustavo Vega",
        categoria: "5ta",
        zona: "B"
    },
    {
        id: 8,
        jugador1: "Andrés Luna",
        jugador2: "Ramiro Díaz",
        categoria: "5ta",
        zona: "B"
    }
];


const partidos = [

    {
        zona: "A",
        pareja1: "Gómez / Ruiz",
        pareja2: "Vera / Ortiz",
        fecha: "15/03/2026",
        hora: "17:00",
        cancha: "Cancha 1",
        resultado: "-"
    },

    {
        zona: "A",
        pareja1: "Pérez / López",
        pareja2: "Díaz / Torres",
        fecha: "15/03/2026",
        hora: "18:00",
        cancha: "Cancha 2",
        resultado: "-"
    },

    {
        zona: "B",
        pareja1: "Silva / Molina",
        pareja2: "Castro / Ríos",
        fecha: "15/03/2026",
        hora: "19:00",
        cancha: "Cancha 1",
        resultado: "-"
    }

];


function mostrarSeccion(id) {

    document.querySelectorAll(".seccion")
        .forEach(seccion => {
            seccion.classList.remove("activa");
        });

    document.getElementById(id)
        .classList.add("activa");

}


function mostrarPartido(partido) {

    return `
        <div class="card partido">

            <div class="parejas">
                ${partido.pareja1}
            </div>

            <div class="vs">
                VS
            </div>

            <div class="parejas">
                ${partido.pareja2}
            </div>

            <div class="info">

                <span>📅 ${partido.fecha}</span>

                <span>🕐 ${partido.hora}</span>

                <span>🎾 ${partido.cancha}</span>

            </div>

            <div class="info">

                <span>Resultado: ${partido.resultado}</span>

            </div>

        </div>
    `;
}


function cargarProximosPartidos() {

    const contenedor =
        document.getElementById("proximos-partidos");

    contenedor.innerHTML =
        partidos.map(mostrarPartido).join("");

}


function cargarParejas() {

    const contenedor =
        document.getElementById("lista-parejas");

    contenedor.innerHTML =
        parejas.map(pareja => `

            <div class="card">

                <strong>
                    ${pareja.jugador1} / ${pareja.jugador2}
                </strong>

                <br>

                Categoría: ${pareja.categoria}

                <br>

                Zona: ${pareja.zona}

            </div>

        `).join("");

}


function cargarPartidos() {

    const contenedor =
        document.getElementById("lista-partidos");

    contenedor.innerHTML =
        partidos.map(mostrarPartido).join("");

}


function mostrarZona(zona) {

    const contenedor =
        document.getElementById("zona-contenido");

    const partidosZona =
        partidos.filter(p => p.zona === zona);

    contenedor.innerHTML = `

        <h3>Zona ${zona}</h3>

        ${partidosZona.length
            ? partidosZona.map(mostrarPartido).join("")
            : "<p>No hay partidos cargados.</p>"
        }

    `;

}


function cargarPosiciones() {

    const contenedor =
        document.getElementById("tabla-posiciones");

    contenedor.innerHTML = `

        <div class="card">

            <table>

                <thead>

                    <tr>
                        <th>Pos.</th>
                        <th>Pareja</th>
                        <th>Pts.</th>
                        <th>PG</th>
                        <th>PP</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>1</td>
                        <td>Gómez / Ruiz</td>
                        <td>3</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Vera / Ortiz</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>

                </tbody>

            </table>

        </div>

    `;

}


function cargarEliminatorias() {

    const contenedor =
        document.getElementById("eliminatorias-contenido");

    contenedor.innerHTML = `

        <div class="card partido">

            <h3>Octavos de final</h3>

            <div class="parejas">
                1° Zona A
            </div>

            <div class="vs">
                VS
            </div>

            <div class="parejas">
                2° Zona B
            </div>

            <div class="info">
                <span>📅 Fecha pendiente</span>
                <span>🕐 Horario pendiente</span>
                <span>🎾 Cancha pendiente</span>
            </div>

        </div>

    `;

}


cargarProximosPartidos();
cargarParejas();
cargarPartidos();
cargarPosiciones();
cargarEliminatorias();
