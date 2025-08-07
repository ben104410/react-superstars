
const Images = [
  '/gallery/superstars.jpg',
  'superstars.jpg',
  'https://via.placeholder.com/300x200?text=Event+3',
  'https://via.placeholder.com/300x200?text=Event+4',
  'https://via.placeholder.com/300x200?text=Event+5',
  'https://via.placeholder.com/300x200?text=Event+6',
];

const GalleryPage = () => {
  return (
    <div className="font-sans bg-red-50 min-h-screen flex flex-col">
      
      <section className="py-20 px-4 bg-blue-50 flex-grow">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Images.map((url, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={url}
                  alt={`Event ${index + 1}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default GalleryPage;