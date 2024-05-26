import mongoose, {Schema} from 'mongoose';

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please Provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please Provide an email"],
    },
    projectdescription: {
        type: String,
        required: [true, "Please Provide a Message"],
    },
}, { timestamps: true })

const Contact = mongoose.models.contacts || mongoose.model('contacts', contactSchema);

export default Contact;