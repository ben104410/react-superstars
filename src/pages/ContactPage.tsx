import ContactForm from '../components/Contactform';

const ContactPage = () => {
  return (
    <section className="py-16 px-4 bg-blue-100 flex-grow">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-600 mb-12">
          Have a question or want to join us? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
      </div>
      <div className="max-w-lg mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
