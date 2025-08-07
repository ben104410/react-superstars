
interface EventCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

function EventCard({ title, date, description, imageUrl }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default EventCard;