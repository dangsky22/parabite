
export default function MenuCard({ image, title, description }) {
    return (
      <div className="flex items-center bg-white rounded-lg shadow-md p-3 mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-20 h-20 object-cover rounded-lg mr-4" 
        />
        <div>
          <h5 className="font-semibold text-gray-800 ">{title}</h5>
          <p className="text-gray-500 text-xs">{description}</p>
        </div>
        <div className="ml-auto text-yellow-500 text-2xl ">
          &#9825; {/* Icon hati */}
        </div>
      </div>
    );
  }
  