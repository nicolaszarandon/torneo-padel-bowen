/* ==========================================
   PAREJAS
   ========================================== */

const parejas = [

    {
        id: 1,
        nombre: "Gómez / Ruiz",
        jugador1: "Lucas Gómez",
        jugador2: "Patricio Ruiz",
        categoria: "Masculino",
        zona: "A"
    },

    {
        id: 2,
        nombre: "Vera / Ortiz",
        jugador1: "Juan Vera",
        jugador2: "Martín Ortiz",
        categoria: "Masculino",
        zona: "A"
    },

    {
        id: 3,
        nombre: "Pérez / López",
        jugador1: "Carlos Pérez",
        jugador2: "Diego López",
        categoria: "Masculino",
        zona: "A"
    },


    {
        id: 4,
        nombre: "Silva / Molina",
        jugador1: "Pedro Silva",
        jugador2: "José Molina",
        categoria: "Masculino",
        zona: "B"
    },

    {
        id: 5,
        nombre: "Castro / Ríos",
        jugador1: "Sergio Castro",
        jugador2: "Nicolás Ríos",
        categoria: "Masculino",
        zona: "B"
    },

    {
        id: 6,
        nombre: "Sosa / Vega",
        jugador1: "Matías Sosa",
        jugador2: "Gustavo Vega",
        categoria: "Masculino",
        zona: "B"
    },


    {
        id: 7,
        nombre: "Luna / Díaz",
        jugador1: "Andrés Luna",
        jugador2: "Ramiro Díaz",
        categoria: "Masculino",
        zona: "C"
    },

    {
        id: 8,
        nombre: "Navarro / Pérez",
        jugador1: "Jorge Navarro",
        jugador2: "Federico Pérez",
        categoria: "Masculino",
        zona: "C"
    },

    {
        id: 9,
        nombre: "Torres / Medina",
        jugador1: "Pablo Torres",
        jugador2: "Marcos Medina",
        categoria: "Masculino",
        zona: "C"
    },


    {
        id: 10,
        nombre: "Fernández / Gómez",
        jugador1: "Alejandro Fernández",
        jugador2: "Mauricio Gómez",
        categoria: "Masculino",
        zona: "D"
    },

    {
        id: 11,
        nombre: "Romero / Díaz",
        jugador1: "Federico Romero",
        jugador2: "Sebastián Díaz",
        categoria: "Masculino",
        zona: "D"
    },

    {
        id: 12,
        nombre: "Méndez / Soto",
        jugador1: "Daniel Méndez",
        jugador2: "Ricardo Soto",
        categoria: "Masculino",
        zona: "D"
    }

];



/* ==========================================
   PARTIDOS DE ZONA
   ========================================== */

const partidos = [

    // ZONA A

    {
        id: 1,
        zona: "A",
        pareja1: "Gómez / Ruiz",
        pareja2: "Vera / Ortiz",
        fecha: "15/03/2026",
        hora: "17:00",
        cancha: "Cancha 1",
        resultado: "6-3 / 6-4"
    },

    {
        id: 2,
        zona: "A",
        pareja1: "Vera / Ortiz",
        pareja2: "Pérez / López",
        fecha: "15/03/2026",
        hora: "18:00",
        cancha: "Cancha 2",
        resultado: "-"
    },

    {
        id: 3,
        zona: "A",
        pareja1: "Gómez / Ruiz",
        pareja2: "Pérez / López",
        fecha: "15/03/2026",
        hora: "19:00",
        cancha: "Cancha 1",
        resultado: "-"
    },


    // ZONA B

    {
        id: 4,
        zona: "B",
        pareja1: "Silva / Molina",
        pareja2: "Castro / Ríos",
        fecha: "16/03/2026",
        hora: "17:00",
        cancha: "Cancha 1",
        resultado: "6-2 / 6-3"
    },

    {
        id: 5,
        zona: "B",
        pareja1: "Castro / Ríos",
        pareja2: "Sosa / Vega",
        fecha: "16/03/2026",
        hora: "18:00",
        cancha: "Cancha 2",
        resultado: "-"
    },

    {
        id: 6,
        zona: "B",
        pareja1: "Silva / Molina",
        pareja2: "Sosa / Vega",
        fecha: "16/03/2026",
        hora: "19:00",
        cancha: "Cancha 1",
        resultado: "-"
    },


    // ZONA C

    {
        id: 7,
        zona: "C",
        pareja1: "Luna / Díaz",
        pareja2: "Navarro / Pérez",
        fecha: "17/03/2026",
        hora: "17:00",
        cancha: "Cancha 1",
        resultado: "6-4 / 6-3"
    },

    {
        id: 8,
        zona: "C",
        pareja1: "Navarro / Pérez",
        pareja2: "Torres / Medina",
        fecha: "17/03/2026",
        hora: "18:00",
        cancha: "Cancha 2",
        resultado: "-"
    },

    {
        id: 9,
        zona: "C",
        pareja1: "Luna / Díaz",
        pareja2: "Torres / Medina",
        fecha: "17/03/2026",
        hora: "19:00",
        cancha: "Cancha 1",
        resultado: "-"
    },


    // ZONA D

    {
        id: 10,
        zona: "D",
        pareja1: "Fernández / Gómez",
        pareja2: "Romero / Díaz",
        fecha: "18/03/2026",
        hora: "17:00",
        cancha: "Cancha 1",
        resultado: "6-1 / 6-2"
    },

    {
        id: 11,
        zona: "D",
        pareja1: "Romero / Díaz",
        pareja2: "Méndez / Soto",
        fecha: "18/03/2026",
        hora: "18:00",
        cancha: "Cancha 2",
        resultado: "-"
    },

    {
        id: 12,
        zona: "D",
        pareja1: "Fernández / Gómez",
        pareja2: "Méndez / Soto",
        fecha: "18/03/2026",
        hora: "19:00",
        cancha: "Cancha 1",
        resultado: "-"
    }

];



/* ==========================================
   NAVEGACIÓN
   ========================================== */

function mostrarSeccion(id) {

    document
        .querySelectorAll(".seccion")
        .forEach(seccion => {

            seccion.classList.remove("activa");

        });


    const seccion =
        document.getElementById(id);


    if (seccion) {

        seccion.classList.add("activa");

    }

}



/* ==========================================
   HTML DE UN PARTIDO
   ========================================== */

function mostrarPartido(partido) {

    return `

        <div class="card partido">

            <div class="card-header">

                <span class="badge">
                    ZONA ${partido.zona}
                </span>

            </div>


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

                <span>
                    📅 ${partido.fecha}
                </span>

                <span>
                    🕐 ${partido.hora}
                </span>

                <span>
                    🎾 ${partido.cancha}
                </span>

            </div>


            <div class="resultado">

                Resultado:
                ${partido.resultado}

            </div>

        </div>

    `;

}



/* ==========================================
   INICIO
   ========================================== */

function cargarProximosPartidos() {

    const contenedor =
        document.getElementById(
            "proximos-partidos"
        );


    const partidosPendientes =
        partidos.filter(
            partido =>
                partido.resultado === "-"
        );


    const partidosMostrar =
        partidosPendientes.length > 0
            ? partidosPendientes.slice(0, 3)
            : partidos.slice(0, 3);


    contenedor.innerHTML =
        partidosMostrar
            .map(mostrarPartido)
            .join("");

}



/* ==========================================
   PAREJAS
   ========================================== */

function cargarParejas() {

    const contenedor =
        document.getElementById(
            "lista-parejas"
        );


    let html = "";


    ["A", "B", "C", "D"]
        .forEach(zona => {

            html += `

                <div class="card">

                    <h3>
                        🟢 Zona ${zona}
                    </h3>

            `;


            parejas
                .filter(
                    pareja =>
                        pareja.zona === zona
                )
                .forEach(
                    (pareja, index) => {

                        html += `

                            <div class="pareja-zona">

                                <strong>
                                    ${index + 1}.
                                    ${pareja.nombre}
                                </strong>

                                <span>
                                    ${pareja.categoria}
                                </span>

                            </div>

                        `;

                    }
                );


            html += `

                </div>

            `;

        });


    contenedor.innerHTML = html;

}



/* ==========================================
   PARTIDOS
   ========================================== */

function cargarPartidos() {

    const contenedor =
        document.getElementById(
            "lista-partidos"
        );


    contenedor.innerHTML =
        partidos
            .map(mostrarPartido)
            .join("");

}



/* ==========================================
   ZONAS
   ========================================== */

function cargarBotonesZonas() {

    const contenedor =
        document.getElementById(
            "botones-zonas"
        );


    contenedor.innerHTML = "";


    ["A", "B", "C", "D"]
        .forEach(zona => {

            contenedor.innerHTML += `

                <button
                    class="zona-button"
                    onclick="mostrarZona('${zona}')"
                >
                    Zona ${zona}
                </button>

            `;

        });

}



function mostrarZona(zona) {

    const contenedor =
        document.getElementById(
            "zona-contenido"
        );


    const parejasZona =
        parejas.filter(
            pareja =>
                pareja.zona === zona
        );


    const partidosZona =
        partidos.filter(
            partido =>
                partido.zona === zona
        );


    let html = `

        <div class="card">

            <h3>
                Zona ${zona}
            </h3>


            <div class="lista-zona">

    `;


    parejasZona.forEach(
        (pareja, index) => {

            html += `

                <div class="pareja-zona">

                    <strong>
                        ${index + 1}.
                        ${pareja.nombre}
                    </strong>

                </div>

            `;

        }
    );


    html += `

            </div>

        </div>


        <h3>
            🎾 Partidos - Zona ${zona}
        </h3>

    `;


    html += partidosZona
        .map(mostrarPartido)
        .join("");


    contenedor.innerHTML = html;

}



/* ==========================================
   POSICIONES
   ========================================== */

function cargarPosiciones() {

    const contenedor =
        document.getElementById(
            "tabla-posiciones"
        );


    let html = "";


    ["A", "B", "C", "D"]
        .forEach(zona => {

            const parejasZona =
                parejas.filter(
                    pareja =>
                        pareja.zona === zona
                );


            html += `

                <h3>
                    Zona ${zona}
                </h3>


                <div class="tabla-container">

                    <table>

                        <thead>

                            <tr>

                                <th>Pos.</th>
                                <th>Pareja</th>
                                <th>PJ</th>
                                <th>PG</th>
                                <th>PP</th>
                                <th>Sets</th>
                                <th>Juegos</th>
                                <th>Pts.</th>

                            </tr>

                        </thead>


                        <tbody>

            `;


            parejasZona
                .forEach(
                    (pareja, index) => {

                        html += `

                            <tr
                                class="${
                                    index < 2
                                        ? "clasifica"
                                        : ""
                                }"
                            >

                                <td class="posicion">
                                    ${index + 1}
                                </td>

                                <td>
                                    ${pareja.nombre}
                                </td>

                                <td>0</td>

                                <td>0</td>

                                <td>0</td>

                                <td>0</td>

                                <td>0</td>

                                <td>0</td>

                            </tr>

                        `;

                    }
                );


            html += `

                        </tbody>

                    </table>

                </div>

            `;

        });


    contenedor.innerHTML = html;

}



/* ==========================================
   TARJETA DE ELIMINATORIA
   ========================================== */

function tarjetaEliminatoria(
    nombre,
    pareja1,
    pareja2,
    fecha = "Pendiente",
    hora = "Pendiente",
    cancha = "Pendiente"
) {

    return `

        <div class="eliminatoria">

            <div class="eliminatoria-nombre">
                ${nombre}
            </div>


            <div class="eliminatoria-pareja">
                ${pareja1}
            </div>


            <div class="eliminatoria-vs">
                VS
            </div>


            <div class="eliminatoria-pareja">
                ${pareja2}
            </div>


            <div class="info">

                <span>
                    📅 ${fecha}
                </span>

                <span>
                    🕐 ${hora}
                </span>

                <span>
                    🎾 ${cancha}
                </span>

            </div>


            <div class="resultado-eliminatoria">
                Resultado: Pendiente
            </div>

        </div>

    `;

}



/* ==========================================
   ELIMINATORIAS
   ========================================== */

function cargarEliminatorias() {

    const contenedor =
        document.getElementById(
            "eliminatorias-contenido"
        );


    contenedor.innerHTML = `


        <!-- ==================================
             OCTAVOS DE FINAL
             ================================== -->

        <div class="ronda">

            <h3>
                🏆 Octavos de final
            </h3>


            <p class="descripcion-ronda">

                Las parejas clasificadas en
                2° y 3° lugar de cada zona
                disputan los octavos de final.

                Las parejas que terminaron
                1° en cada zona pasan
                directamente a cuartos.

            </p>


            <div class="eliminatoria-grid">


                ${tarjetaEliminatoria(
                    "OCTAVOS 1",
                    "2° Zona A",
                    "3° Zona D"
                )}


                ${tarjetaEliminatoria(
                    "OCTAVOS 2",
                    "2° Zona B",
                    "3° Zona C"
                )}


                ${tarjetaEliminatoria(
                    "OCTAVOS 3",
                    "2° Zona C",
                    "3° Zona B"
                )}


                ${tarjetaEliminatoria(
                    "OCTAVOS 4",
                    "2° Zona D",
                    "3° Zona A"
                )}

            </div>

        </div>



        <!-- ==================================
             CUARTOS DE FINAL
             ================================== -->

        <div class="ronda">

            <h3>
                🥇 Cuartos de final
            </h3>


            <div class="eliminatoria-grid">


                ${tarjetaEliminatoria(
                    "CUARTOS 1",
                    "1° Zona A",
                    "GANADOR OCTAVOS 1"
                )}


                ${tarjetaEliminatoria(
                    "CUARTOS 2",
                    "1° Zona B",
                    "GANADOR OCTAVOS 2"
                )}


                ${tarjetaEliminatoria(
                    "CUARTOS 3",
                    "1° Zona C",
                    "GANADOR OCTAVOS 3"
                )}


                ${tarjetaEliminatoria(
                    "CUARTOS 4",
                    "1° Zona D",
                    "GANADOR OCTAVOS 4"
                )}

            </div>

        </div>



        <!-- ==================================
             SEMIFINALES
             ================================== -->

        <div class="ronda">

            <h3>
                🥈 Semifinales
            </h3>


            <div class="eliminatoria-grid">


                ${tarjetaEliminatoria(
                    "SEMIFINAL 1",
                    "GANADOR CUARTOS 1",
                    "GANADOR CUARTOS 3"
                )}


                ${tarjetaEliminatoria(
                    "SEMIFINAL 2",
                    "GANADOR CUARTOS 2",
                    "GANADOR CUARTOS 4"
                )}

            </div>

        </div>



        <!-- ==================================
             FINAL
             ================================== -->

        <div class="ronda">

            <h3>
                🏆 Final
            </h3>


            ${tarjetaEliminatoria(
                "FINAL",
                "GANADOR SEMIFINAL 1",
                "GANADOR SEMIFINAL 2"
            )}

        </div>



        <!-- ==================================
             CAMPEÓN
             ================================== -->

        <div class="cam-peon">

            <div class="trofeo-final">
                🏆
            </div>

            <h2>
                CAMPEÓN
            </h2>

            <p>
                Pendiente
            </p>

        </div>


    `;

}



/* ==========================================
   ACTUALIZAR
   ========================================== */

function actualizarPagina() {

    location.reload();

}



/* ==========================================
   INICIALIZACIÓN
   ========================================== */

cargarBotonesZonas();

cargarProximosPartidos();

cargarParejas();

cargarPartidos();

cargarPosiciones();

cargarEliminatorias();

mostrarZona("A");
