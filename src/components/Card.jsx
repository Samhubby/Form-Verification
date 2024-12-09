const Card = ({ src, country, office, company, description }) => {
  return (
    <div className="border-[#F8F8F8] border-1 w-80 text-white py-4 pl-5  rounded-lg shadow-md  backdrop-blur-lg">
      <div className="flex flex-col space-y-2">
        <img src={src} alt={`${country} Flag`} className="w-16" />
        <div className="space-y-1">
          <h2 className="text-base font-bold">{country}</h2>
          <p className="text-xs">{office}</p>
        </div>
      </div>
      <div className="space-y-2 w-56">
      <p className="mt-4 text-xs">{company} </p>
      <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default Card;
