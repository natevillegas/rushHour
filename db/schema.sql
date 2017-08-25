-- NOTE: If you followed the readme steps, you can disregard this entire file.-

-- Raw SQL for Database Creation (run this in Sequel Pro)
CREATE DATABASE sequelize_passport;

-- Then run the following in your Sequelize CLI to create the migrations and seed the database
` sequelize db:migrate && sequelize db:seed:all `

-- Then, (optional but used during development) you can seed associations
` node db/seeding-attributes.js `

-- NOTE: If you completed the readme, both of these steps were done when you ran...
npm run setupDB

