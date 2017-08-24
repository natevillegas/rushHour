var authController = require('../controllers/authcontroller.js');
var db = require("../models"); 
 
module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
        }
    ));

    // app.get('/dashboard',authController.dashboard);
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/logout',authController.logout);
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
        }
 
    ));

    // Get request to obtain Appointments table data for insertion to dashboard calendar
    app.get("/api", function(req, res) {
         db.appointments.findAll({
            // include: {
            //     model: db.user
            // }
         }).then(function(dbPost) {
          res.json(dbPost);
        })
    });

    // routes users vs admins
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated() && req.user.admin == 0) {
            return next();
        } else {
            res.redirect('/signin');
        }
    }
}