
import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can send the form data to an API or email service
    console.log('Form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">Contact Superstars Club</h2>
      {submitted && (
        <p className="text-green-600 text-center font-semibold mb-4">Message sent successfully!</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            name="message"
            value={form.message}
            id="message"
            onChange={handleChange}
            rows={4}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
