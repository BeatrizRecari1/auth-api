import functions from "firebase-functions";
import express from "express"
import cors from "cors"
import { signup } from "./src/users.js";

const app = express()
app.use(cors())
app.use(express.json())

// Login and signup routes...
app.post("/signup", signup)


export const api = functions.https.onRequest(app)

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
