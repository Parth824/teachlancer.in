require('dotenv').config();

let CONFIG = {}; //Make this global to use all over the application

CONFIG.email = process.env.EMAIL || "teachlancer@gmail.com";
CONFIG.password = process.env.PASSWORD || "dedf ccpy fxum xmrl";

module.exports = CONFIG;