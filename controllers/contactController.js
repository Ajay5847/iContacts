const { success, error } = require('../utils/responseWrapper');
const Contact = require('../models/ContactSchema');

const createContact = async (req, res) => {
    try {
        const { name, mobile, email } = req.body;
        if (!name || !mobile || !email) {
            return res.send(error(404, "All Fields are Required"));
        }
        const checkLen = `${mobile}`;
        if (checkLen.length != 10) {
            return res.send(error(401, "Invalid Mobile Number"));
        }

        const oldMobile = await Contact.findOne({ mobile });

        if (oldMobile) {
            return res.send(error(404, "User with this Mobile Already Exists"));
        }
        const user = await Contact.create({
            name,
            mobile,
            email
        })

        return res.send(success(200, { user }));
    } catch (e) {
        return res.send(error(500, e.message));
    }
}

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({});
        return res.send(success(200, { contacts }));
    } catch (e) {
        return res.send(error(500, e.message));
    }
}

const updateContact = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.send(error(404, "Not Found"));
        }

        const { name, mobile, email } = req.body;
        const existingContact = await Contact.findOne({ mobile });

        if (existingContact != null && existingContact.mobile !== contact.mobile) {
            return res.send(error(404, "User with this Mobile Already Exists"));
        }

        const checkLen = `${mobile}`;
        if (checkLen.length != 10) {
            return res.send(error(401, "Invalid Mobile Number"));
        }
        const newContact = {
            name,
            mobile,
            email
        }

        contact = await Contact.findByIdAndUpdate(req.params.id, { $set: newContact }, { new: true });

        return res.send(success(200, { contact }));
    } catch (e) {
        return res.send(error(500, e.message));
    }
}

const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.send(error(404, "Not Found"));
        }

        await Contact.findByIdAndDelete(req.params.id);

        return res.send(success(200, "Contact Deleted SuccessFully"));
    } catch (e) {
        return res.send(error(500, e.message));
    }
}

module.exports = { createContact, getAllContacts, updateContact, deleteContact };