// NOTE: This file is used to create seeded associations between users and their appointments.
// It can be called from the command line
// If you followed the README, then you can disregard this file.


// Sequelize Dependency
var models = require('/models'); 

// Extracts the sequelize connection from the models object
var sequelizeConnection = models.sequelize;

// Sync the tables (this creates the "associations" tables)
sequelizeConnection.sync()

// After the sync, seed the assocations (they do not exist until the sync is done)
.then(function(){


  // ------------ Seed the appointments ------------

  // User 1
  models.User.findOne({
    where: {
      id: 1
    }
  }).then(function(user){
    user.addAppointment([1]);
  });


})

