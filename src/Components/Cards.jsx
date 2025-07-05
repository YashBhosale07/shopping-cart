import { useContext } from "react";
import Card from "./Card";
import { ProductContext } from "../Constants/Content";
import Loading from "./Loading";

const Cards = () => {
  const [products] = useContext(ProductContext);

  if (!products) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 justify-start p-10">
      {products.map((value, index) => (
        <Card key={index} value={value} />
      ))}
    </div>
  );
};

export default Cards;
