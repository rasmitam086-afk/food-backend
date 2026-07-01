// controllers/contact.controller.js
import Contact from "../model/contact.model.js";

// Submit Contact Form
export const submitContact = async(req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Save data to database
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
        });

        await newContact.save();

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newContact,
        });

    } catch (error) {
        console.log("Contact Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// Get all contact messages
export const getAllContacts = async(req, res) => {
    try {
        const contacts = await Contact.find();

        res.status(200).json({
            success: true,
            data: contacts,
        });

    } catch (error) {
        console.log("Get Contacts Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};

// Delete contact message
export const deleteContact = async(req, res) => {
    try {
        const { id } = req.params;

        const deletedContact = await Contact.findByIdAndDelete(id);

        if (!deletedContact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Contact deleted successfully",
        });

    } catch (error) {
        console.log("Delete Contact Error:", error);
        res.status(500).json({
            success: false,
            message: "Server Error",
        });
    }
};