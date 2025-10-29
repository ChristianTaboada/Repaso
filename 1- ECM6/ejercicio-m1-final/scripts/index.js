class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
    }

    addActivity(activity) {
        this.activities.push(activity);
    }

    getActivities() {
        return this.activities;
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(a => a.id !== id);
    }
}

// Actividad 1: Convierte una Activity en un nodo de DOM (tarjeta)
function activityToCard(activity) {
    
    const {id, title, description, imgUrl} = activity;

    const card = document.createElement('div');
    card.classList.add('activity-card');
    card.dataset.id = id;

    const h3 = document.createElement('h3');
    h3.textContent = title;
    h3.classList.add('activity-title');

    const p = document.createElement('p');
    p.textContent = description;
    p.classList.add('activity-description');

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = title;
    img.classList.add('activity-img');

    // Boton para eliminar
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.classList.add("delete-btn");

    // Evento para eliminar actividad
    deleteBtn.addEventListener("click", () => {
        repo.deleteActivity(id);
        renderActivities(repo);
    })

    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(img);
    card.appendChild(deleteBtn);

    return card;

}

function renderActivities(repo) {
    const container = document.getElementById('activitiesContainer')

    container.innerHTML = '';

    const activities = repo.getActivities();
    const cards = activities.map(activityToCard);

    cards.forEach(card => container.appendChild(card));
}

function handlerAddActivity(){
    // Seleccion de inputs
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const imgInput = document.getElementById("imgUrl");

    // Obtener los valores de los Inputs
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const imgUrl = imgInput.value.trim();

    if(!title || !description || !imgUrl) {
        alert("Por Favor, complete todos los campos antes de agregar una actividad");
        return;
    }

    // Crear la actividad
    const newActivity = new Activity(Date.now(), title, description, imgUrl);
    repo.addActivity(newActivity);

    // Refrescar
    renderActivities(repo);

    //limpiamos los inputs
    titleInput.value = "";
    descriptionInput.value = "";
    imgInput.value = "";
}

const addBtn = document.getElementById("add-button")
addBtn.addEventListener("click",handlerAddActivity)

// Para probar si funciona
// suponer que ya existen Activity y Repository y repo instanciado
const repo = new Repository();
repo.addActivity(new Activity(1, 'Aprender JS', 'Repaso DOM y funciones', 'https://picsum.photos/200/120'));
repo.addActivity(new Activity(2, 'Practicar CSS', 'Hacer estilos', 'https://picsum.photos/201/120'));

// Llamada al render (importante: pasar repo)
renderActivities(repo);




module.exports = {Activity, Repository };