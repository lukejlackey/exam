const PetController = require("../controllers/pets.controller");

module.exports = app => {
    app.get("/api/pets/all", PetController.findAllPets);
    app.get("/api/pets/:id", PetController.findOnePet);
    app.put("/api/pets/edit/:id", PetController.updateExistingPet);
    app.post("/api/pets/new", PetController.createNewPet);
    app.delete("/api/pets/delete/:id", PetController.deletePet);
};