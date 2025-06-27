const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
admin.initializeApp();

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

// No changes needed in this file for project ID.
// Your project ID (abirabdullah-radiance) is used in your frontend when calling
// the deployed function URLs.
// Example usage in frontend:
// fetch('https://us-central1-abirabdullah-radiance.cloudfunctions.net/api/send-otp',
//   ...)
// fetch('https://us-central1-abirabdullah-radiance.cloudfunctions.net/api/verify-otp',
//   ...)

exports.api = functions.https.onRequest(app);
