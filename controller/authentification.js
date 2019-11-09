const mongoose = require ("mongoose");
var passport = require("passport");
var client = require("../models/client.models");
var clientControl=require("../controller/clients.controller");

var clientController = {};

// // Restrict access to root page
// clientController.home = function(req, res) {
//   res.render('index', { client : req.client });
// };

// // Go to registration page
// clientController.register = function(req, res) {
//   res.render('register');
// };

// // Post registration
// clientController.doRegister = function(req, res) {
//   client.register(new client({ email : req.body.email}), req.body.password, function(err, client) {
//     if (err) {
//       return res.render('register', { client : client });
//     }
//     passport.authenticate('local')(req, res, function () {
//       res.redirect('/');
//     });
//   });
// };

// Go to login page
// clientController.login = function(req, res) {
//   res.render('login');
// };

// // Post login
// clientController.doLogin = function(req, res) {
//   passport.authenticate('local')(req, res, function () {
//     res.redirect('/');
//   });
// };

// // logout
// clientController.logout = function(req, res) {
//   req.logout();
//   res.redirect('/');
// };

module.exports = clientController;