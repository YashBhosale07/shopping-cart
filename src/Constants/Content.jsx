import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "./axios";
export const ProductContext = createContext(null);

const Content = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axiosInstance.get("/products/categories");
        setCategory(data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [products, setProducts] = useState(null);
  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProductContext.Provider
      value={[products, setProducts, category, setCategory]}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default Content;
