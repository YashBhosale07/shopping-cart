import { Link } from "react-router-dom";

const Card = ({value} ) => {
  
  return (
    <div className="card p-3 border shadow rounded w-[18%] h-[40vh] flex flex-col items-center justify-center">
      <div
        className="w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center hover:scale-105 transition-transform duration-300"
        style={{
          backgroundImage: `url(${value.image})`,
        }}
      ></div>
      <Link to={`/details/${value.id}`}>
        <h1 className="hover:text-blue-300 text-sm text-center">{value.title}</h1>
      </Link>
    </div>
  );
};

export default Card;
