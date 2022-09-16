const Pet = require('../models/pets.model')

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json({ pets: allPets }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOnePet = (req, res) => {
	Pet.findOne({ _id: req.params.id })
		.then(onePet => res.json({ pet: onePet }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json({ pet: newPet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};