import { useContext } from "react";
import Card from "./Card";
import {ProductContext} from "../Constants/Content";

const Cards = () => {
  const [products] = useContext(ProductContext);
  if (!products) return <p>loading...</p>;
  return (
    <div className="flex flex-wrap gap-4 justify-start p-10">
      {products.map((value, index) => {
        return <Card key={index} value={value} />;
      })}
    </div>
  );
};

export default Cards;
