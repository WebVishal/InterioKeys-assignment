import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  company: string
  date: string;
  id: number
}

const ReviewCard = ({ name, rating, review, date, company, id }: ReviewCardProps) => {
  return (
    <div className="p-4 bg-[#F8F9FA] border rounded-sm shadow-md max-w-md" key={id}>
      <div className="flex items-center mb-2 space-x-2 relative right-3">
        <div className="w-12 h-12 bg-[#2E3134] rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-white">{name[0]}</span>
        </div>
        <h2 className="text-sm font-semibold text-gray-800">{name}</h2>
        <div className="flex items-center bg-red  ml-2 font-bold px-2 py-0.5 rounded-sm mr-2 text-xs">
          <Star className="w-4 h-3 mr-1 text-white" fill="white" />
          <span className=" text-white">
            {rating}
          </span>
        </div>
      </div>
      <h3 className="text-sm font-semibold text-red-500 mb-4 text-red">
        {company}
      </h3>
      <p className="text-sm text-gray-700 mb-3">
        {review}
      </p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
};

export default ReviewCard;