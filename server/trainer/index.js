exports.getTrainer = function(req, res) {
  req.models.trainer.all(function(err, trainers) {
    if (err) {
      throw err;
    } else {
      res.json(trainers);
    }
  });
};

exports.postTrainer = function(req, res) {
  req.models.trainer.create({
    displayName: req.body.displayName,
    name: req.body.name,
    password: req.body.password,
    timeAvailable: req.body.timeAvailable,
    location: req.body.location,
    email: req.body.email,
    driveForClient: req.body.driveForClient,
    offerFitnessAssessment: req.body.offerFitnessAssessment,
    offerNutritionPlan: req.body.offerNutritionPlan,
    price: req.body.price,
    takingNewClients: req.body.takingNewClients,
    phoneNumber: req.body.phoneNumber,
  }, function(err, trainer) {
    if (err) {
      throw err;
    } else {
      res.json(trainer);
    }
  });
};

exports.getIndividualTrainer = function(req, res) {
  req.models.trainer.get(req.params.id, function(err, trainer) {
    if (err) {
      throw err;
    } else {
      res.json(trainer);
    }
  });
};

exports.deleteTrainer = function(req, res) {
  req.models.trainer.get(req.params.id, function(err, trainer) {
    trainer.remove(function(err) {
      if (err) {
        throw err;
      } else {
        res.sendStatus(204);
      }
    });
  });
};

exports.updateTrainer = function(req, res) {
  req.models.trainer.get(req.params.id, function(err, trainer) {
    if (err) {
      throw err;
    } else {
      trainer.displayName = req.body.displayName;
      trainer.name = req.body.name;
      trainer.password = req.body.password;
      trainer.location = req.body.location;
      trainer.email = req.body.email;
      trainer.driveForClient = req.body.driveForClient;
      trainer.offerFitnessAssessment = req.body.offerFitnessAssessment;
      trainer.offerNutritionPlan = req.body.offerNutritionPlan;
      trainer.price = req.body.price;
      trainer.takingNewClients = req.body.takingNewClients;
      trainer.phoneNumber = req.body.phoneNumber;

      trainer.save(function(err) {
        if (err) {
          throw err;
        } else {
          res.json(trainer);
        }
      });
    }
  });
};
