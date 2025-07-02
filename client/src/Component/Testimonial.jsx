import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    review: "Mash-Dev has transformed the way I approach coding. The resources are well-structured and incredibly helpful!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "This platform is amazing! The problem sheets and guides helped me master DSA with ease.",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    review: "A must-visit site for anyone preparing for coding interviews. The explanations are clear and to the point!",
    rating: 4.5,
  },
];

const TestimonialCard = ({ name, review, rating }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center space-x-2">
        {[...Array(Math.floor(rating))].map((_, index) => (
          <Star key={index} className="text-orange-400" size={20} />
        ))}
        {rating % 1 !== 0 && <Star className="text-orange-300 opacity-80" size={20} />}
      </div>
      <p className="text-lg text-gray-300 italic mt-3">"{review}"</p>
      <h3 className="text-orange-400 font-semibold mt-3">{name}</h3>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className=" bg-gray-900 text-white flex flex-col items-center px-6 py-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-10 text-center">
        What Our Users Say
      </h1>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
