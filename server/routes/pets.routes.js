const PetController = require("../controllers/pets.controller");

module.exports = app => {
    app.get("/pets/all", PetController.findAllPets);
    app.get("/pets/:id", PetController.findOnePet);
    app.put("/pets/edit/:id", PetController.updateExistingPet);
    app.post("/pets/new", PetController.createNewPet);
    app.delete("/pets/delete/:id", PetController.deletePet);
};