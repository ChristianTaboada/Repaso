const {Activity, Repository} = require("../scripts/index");

describe("Repository", function () {
    it("deberia agregar una actividad", function(){
        const repo = new Repository();
        const activity = new Activity(1, "Correr", "Salir a correr", "img.jpg");

        repo.addActivity(activity);

        expect(repo.getActivities().length).toBe(1)
        expect(repo.getActivities()[0].title).toBe("Correr")
    });
});