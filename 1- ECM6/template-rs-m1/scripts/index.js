/*
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("activity-form");
    const activityList = document.getElementById("activity-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const imageUrl = document.getElementById("image-url").value;

        if (title && description && imageUrl) {
            const activityCard = document.createElement("div");
            activityCard.classList.add("activity-card");
            activityCard.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
                <img src="${imageUrl}" alt="${title}" width="100">
            `;
            activityList.appendChild(activityCard);

            form.reset();
        }
    });
});
*/

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

    getAllActivities() {
        return this.activities
    }

    createActivity (id, title, description, imgUrl) {
        const newActivity = new Activity (id, title, description, imgUrl)
        this.activities.push(newActivity)
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id)
    }
}

// Un metodo que reciba  datos de una actividad, cree una actividad nueva y la guarde en su array.
// un metodo que le permita retornar todas las actividades.
// un metodo que le permita filtrar las actividades.

const repo = new Repository();

repo.createActivity(1,"Aprende JS","Practicar Clases y Objetos", "Imagen1.png");

console.log(repo.getAllActivities());
