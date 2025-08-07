import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react'; // ✅ type-only import




interface FormData {
  name: string;
  email: string;
  reason: string;
}

const JoinPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Thank you for joining Superstars Club!');
    setFormData({ name: '', email: '', reason: '' });
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
   

      <section className="py-20 px-4 bg-blue -50 flex-grow">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Join Superstars Club</h1>
          <p className="text-lg text-gray-600 mb-10">
            Ready to shine with us? Fill out the form below and become part of our amazing community!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-gray-700 font-medium">
                Why do you want to join?
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                required
                className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

     
    </div>
  );
};

export default JoinPage;


