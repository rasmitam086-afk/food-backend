import express from "express";
import { submitContact, getAllContacts, deleteContact } from "../controllers/contact.controller.js";

const ContactRoutes = express.Router();

// Create contact message
ContactRoutes.post("/create", submitContact);

// Get all contact messages
ContactRoutes.get("/get-all", getAllContacts);

// Delete contact message
ContactRoutes.delete("/delete/:id", deleteContact);

export default ContactRoutes;