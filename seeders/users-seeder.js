'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // Add seeded users to database (note that the date needs to be manually added here)
    // Unencrypted passwords... George -> george // Tho -> tho // Nate -> nate // Joyce -> joyce
    return queryInterface.bulkInsert('users', [
      {admin: false, firstName: "hello", lastName: "hello", email: "hello@hello.com", password: "$2a$08$QQbzCiNKf2rCu62MBG1leOJSUKCF2PvkFwX8PIBpQ9wf8H0S756W6", createdAt: new Date(), updatedAt: new Date()},
      {admin: true, firstName: "world", lastName: "world", email: "world@world.com", password: "$2a$08$LXUIQDKNP82qZsKuSHCatOdx4TGqsp3ESSKQGfdv1GpipRikFeuL6", createdAt: new Date(), updatedAt: new Date()},
      {admin: false, firstName: "test", lastName: "test", email: "test@test.com", password: "$2a$08$d.w01NZXV0h9YFjPieU83urbNVhFYOFwPmDJvNB9vP1hT4JPY0C72", createdAt: new Date(), updatedAt: new Date()},
      {admin: false, firstName: "tree", lastName: "tree", email: "tree@tree.com", password: "$2a$08$y183wtzaZ5E1/3bedczYzuWGiNnOxne4QSCDK8.BDEr8JsPNpeA9K", createdAt: new Date(), updatedAt: new Date()}
    ], {});

  },

  down: function (queryInterface, Sequelize) {

    // Remove the seeded users (note the "{truncate: true}", which resets the primary keys)
    return queryInterface.bulkDelete('users', null, {truncate : true});

  }
};
