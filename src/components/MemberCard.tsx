interface MemberCardProps {
  name: string;
  role: string;
  position:string;
  imageUrl: string;  
}

function MemberCard({ name, role, position, imageUrl }: MemberCardProps) {
  return (

    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="text-sm text-gray-500">{position}</p>
    </div>

  );
}
export default MemberCard;