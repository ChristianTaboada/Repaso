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
