import React, { useState } from "react";
import axios from "axios";
import "../styles/ContactForm.css"; // Import the new CSS file

interface FormDataProps {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormDataProps>({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);
    const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        // Debugging: Check if the Web3Forms API key is present
        console.log("Web3Forms Key:", process.env.REACT_APP_WEB3FORMS_KEY);

        const payload = {
            access_key: process.env.REACT_APP_WEB3FORMS_KEY || "", // Your Web3Forms API key
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
        };

        try {
            console.log("Submitting form with payload:", payload);

            // Send POST request with JSON format
            const response = await axios.post("https://api.web3forms.com/submit", payload, {
                headers: { "Content-Type": "application/json" }
            });

            console.log("Web3Forms Response:", response.data);

            if (response.data.success) {
                setMessage("✅ Message sent successfully!");
                setMessageType("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setMessage("❌ Failed to send message. Please try again.");
                setMessageType("error");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessage("❌ Error sending message. Try again later.");
            setMessageType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        placeholder="Your name" 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        placeholder="Your email address" 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        placeholder="Your phone number (optional)" 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                        placeholder="Your message..."
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    className="submit-button" 
                    disabled={loading}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>

            {message && (
                <div className={`form-message ${messageType}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default ContactForm;
