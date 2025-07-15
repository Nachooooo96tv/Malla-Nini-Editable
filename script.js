// script.js

const asignaturasPorSemestre = {
  "Semestre 1": [
    { codigo: "MAT110", nombre: "INTRODUCCION A LA MATEMÁTICA APLICADA", prereqs: [] },
    { codigo: "CBI111", nombre: "BIOLOGIA CELULAR", prereqs: [] },
    { codigo: "LIC001", nombre: "FUNDAMENTOS DEL ACTUR COMUNITARIO", prereqs: [] },
    { codigo: "VYF101", nombre: "MORFOLOGÍA Y FUNCIÓN", prereqs: [] },
    { codigo: "ENF101", nombre: "PRIMEROS AUXILIOS", prereqs: [] },
    { codigo: "ENF102", nombre: "INTRODUCCIÓN A LOS ESTUDIOS DE LA ENFERMERÍA", prereqs: [] },
  ],
  "Semestre 2": [
    { codigo: "ING101", nombre: "INGLES 1", prereqs: [] },
    { codigo: "QUI101", nombre: "FUNDAMENTOS DE QUÍMICA Y BIOQUÍMICA", prereqs: ["MAT110"] },
    { codigo: "LIC002", nombre: "FUNDAMENTOS ÉTICOS DEL ACTUAR COMUNITARIO", prereqs: ["LIC001"] },
    { codigo: "CBI202", nombre: "HISTOEMBRIOLOGÍA", prereqs: ["CBI111", "VYF101"] },
    { codigo: "ENF201", nombre: "ENFERMERÍA EN EL CURSO DE LA VIDA HUMANA", prereqs: ["ENF102", "ENF101"] },
  ],
  "Semestre 3": [
    { codigo: "ING102", nombre: "INGLES 2", prereqs: ["ING101"] },
    { codigo: "LIC003", nombre: "SALUD PÚBLICA Y POLÍTICAS PÚBLICAS", prereqs: ["LIC002"] },
    { codigo: "AES199", nombre: "BIOESTADÍSTICA", prereqs: ["MAT110"] },
    { codigo: "FIS101", nombre: "FISIOLOGÍA GENERAL", prereqs: ["VYF101", "CBI202"] },
    { codigo: "CBI302", nombre: "MICROBIOLOGÍA Y PARASITOLOGÍA", prereqs: ["CBI111", "CBI202"] },
    { codigo: "ENF301", nombre: "PROCESO DE ATENCIÓN EN ENFERMERÍA 1", prereqs: ["VYF101", "ENF201"] },
  ],
  "Semestre 4": [
    { codigo: "LIC004", nombre: "METODOLOGÍAS PARTICIPATIVAS E INTERACCIÓN COMUNITARIA", prereqs: ["LIC003"] },
    { codigo: "FAR101", nombre: "FARMACOLOGÍA", prereqs: ["QUI101", "MAT110", "FIS101"] },
    { codigo: "PAT101", nombre: "FISIOPATOLOGÍA", prereqs: ["FIS101"] },
    { codigo: "ENF302", nombre: "SALUD COMUNITARIA", prereqs: ["LIC001", "ENF301"] },
    { codigo: "PSI101", nombre: "PSICOLOGÍA PARA EL EJERCICIO DE LA ENFERMERÍA", prereqs: ["ENF301"] },
    { codigo: "ENF302B", nombre: "PROCESO DE ATENCIÓN EN ENFERMERÍA 2", prereqs: ["ENF301", "FIS101"] },
  ],
  "Semestre 5": [
    { codigo: "LIC005", nombre: "TALLER DE INTERVENCIÓN COMUNITARIA INTERDISCIPLINAR 1", prereqs: ["LIC004"] },
    { codigo: "ENF401", nombre: "SALUD Y MORBILIDAD DEL ADULTO 1", prereqs: ["PAT101", "ENF302B", "FAR101"] },
    { codigo: "EPID101", nombre: "EPIDEMIOLOGÍA", prereqs: ["AES199"] },
    { codigo: "EDU101", nombre: "EDUCACIÓN PARA LA SALUD", prereqs: ["ENF302B", "PSI101"] },
    { codigo: "ADM101", nombre: "GESTIÓN EN ENFERMERÍA 1", prereqs: ["AES199", "ENF302B"] },
    { codigo: "PRACT1", nombre: "PRÁCTICA INTEGRADA 1", prereqs: ["CBI302", "PSI101", "PAT101", "ENF301", "ING102", "FAR101", "LIC004"] },
  ],
  "Semestre 6": [
    { codigo: "LIC006", nombre: "TALLER DE INTERVENCIÓN COMUNITARIA INTERDISCIPLINAR 2", prereqs: ["LIC005"] },
    { codigo: "ENF402", nombre: "SALUD Y MORBILIDAD DEL ADULTO 2", prereqs: ["ENF401", "PRACT1", "ADM101", "EPID101", "EDU101", "LIC003"] },
    { codigo: "BIOE101", nombre: "BIOÉTICA", prereqs: ["PRACT1"] },
    { codigo: "ENF403", nombre: "SALUD DEL ADULTO MAYOR", prereqs: ["ENF401"] },
    { codigo: "ADM102", nombre: "GESTIÓN EN ENFERMERÍA 2", prereqs: ["ADM101"] },
    { codigo: "PRACT2", nombre: "PRÁCTICA INTEGRADA 2", prereqs: ["PRACT1", "ENF401", "ADM101", "EPID101", "EDU101", "LIC003"] },
  ],
  "Semestre 7": [
    { codigo: "ENF501", nombre: "ENFERMERÍA EN SALUD MENTAL", prereqs: ["ENF402", "PSI101"] },
    { codigo: "ENF502", nombre: "SALUD DEL NIÑO Y ADOLESCENTE 1", prereqs: ["ENF402", "EDU101", "PRACT2"] },
    { codigo: "ENF503", nombre: "ENFERMERÍA EN URGENCIAS", prereqs: ["ENF402", "PRACT2", "ENF403"] },
    { codigo: "INV101", nombre: "METODOLOGÍAS DE INVESTIGACIÓN", prereqs: ["BIOE101", "ADM102", "ENF302", "ENF402", "PRACT2"] },
    { codigo: "PRACT3", nombre: "PRÁCTICA INTEGRADA 3", prereqs: ["PRACT2", "ENF402", "ADM102", "ENF302", "BIOE101", "ENF403", "EDU101"] },
  ],
  "Semestre 8": [
    { codigo: "PAL101", nombre: "CUIDADOS PALIATIVOS INTEGRALES", prereqs: ["ENF402", "PRACT3", "ENF502"] },
    { codigo: "SOA101", nombre: "SALUD OCUPACIONAL Y AMBIENTAL", prereqs: ["ENF402", "EPID101"] },
    { codigo: "ENF504", nombre: "SALUD DEL NIÑO Y ADOLESCENTE 2", prereqs: ["ENF502", "PRACT3"] },
    { codigo: "INF101", nombre: "INFECCIONES Y ATENCIÓN EN SALUD", prereqs: ["ENF402", "PRACT2"] },
    { codigo: "SEMGRADO", nombre: "SEMINARIO DE GRADO", prereqs: ["ENF502", "ENF503", "INV101", "ENF501", "ENF403"] },
    { codigo: "PRACT4", nombre: "PRÁCTICA INTEGRADA 4", prereqs: ["PRACT3", "ENF501", "ENF502", "ENF503"] },
  ],
  "Semestre 9": [
    { codigo: "SVB101", nombre: "SOPORTE VITAL BÁSICO", prereqs: ["SEMGRADO", "SOA101", "ENF504", "PAL101", "INF101", "ENF503", "ENF502", "ING101", "ING102"] },
    { codigo: "INT1", nombre: "INTERNADO 1", prereqs: ["SEMGRADO", "SOA101", "ENF504", "PAL101", "INF101", "ENF503", "ENF502", "ING101", "ING102"] },
  ],
  "Semestre 10": [
    { codigo: "PREXT", nombre: "PREPARACIÓN EXAMEN DE TÍTULO", prereqs: ["SEMGRADO", "SOA101", "ENF504", "PAL101", "INF101", "ENF503", "ENF502", "ING101", "ING102", "INT1"] },
    { codigo: "INT2", nombre: "INTERNADO 2", prereqs: ["SEMGRADO", "SOA101", "ENF504", "PAL101", "INF101", "ENF503", "ENF502", "ING101", "ING102", "INT1"] },
  ]
};

let estado = {};

function guardarEstado() {
  localStorage.setItem("estadoMallaEnfUDLA", JSON.stringify(estado));
}

function cargarEstado() {
  const data = localStorage.getItem("estadoMallaEnfUDLA");
  let estadoValido = true;

  if (data) {
    try {
      const cargado = JSON.parse(data);
      const codigosValidos = Object.values(asignaturasPorSemestre).flat().map(r => r.codigo);
      estadoValido = codigosValidos.every(c => c in cargado);
      if (estadoValido) {
        estado = cargado;
        return;
      }
    } catch {
      estadoValido = false;
    }
  }

  // Si no hay estado válido, inicializa en falso
  estado = {};
  Object.values(asignaturasPorSemestre).flat().forEach(r => estado[r.codigo] = false);
}

function crearMalla() {
  cargarEstado();
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  for (const [semestre, ramos] of Object.entries(asignaturasPorSemestre)) {
    const bloque = document.createElement("div");
    bloque.className = "bloque-semestre";

    const titulo = document.createElement("h2");
    titulo.className = "titulo-semestre";
    titulo.textContent = `⭐ ${semestre} ⭐`;
    bloque.appendChild(titulo);

    const contenedor = document.createElement("div");
    contenedor.className = "grid";

    ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "card" + (ramo.codigo.startsWith("PRACT") || ramo.codigo.startsWith("SEM") || ramo.codigo.startsWith("INT") || ramo.codigo === "PREXT" ? " especial" : "");
      div.id = ramo.codigo;
      div.textContent = `${ramo.codigo}\n${ramo.nombre}`;
      div.addEventListener("click", () => {
        if (!div.classList.contains("locked")) {
          estado[ramo.codigo] = !estado[ramo.codigo];
          guardarEstado();
          actualizarVista();
        }
      });
      contenedor.appendChild(div);
    });

    bloque.appendChild(contenedor);
    malla.appendChild(bloque);
  }

  actualizarVista();
}

function actualizarVista() {
  Object.values(asignaturasPorSemestre).flat().forEach(ramo => {
    const div = document.getElementById(ramo.codigo);
    const aprobado = estado[ramo.codigo];
    const habilitado = ramo.prereqs.every(req => estado[req]);
    div.classList.toggle("active", aprobado);
    div.classList.toggle("locked", !aprobado && !habilitado);
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);
