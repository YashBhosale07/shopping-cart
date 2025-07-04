import { createContext,useEffect,useState} from "react"
import {axiosInstance} from "./axios";
export const ProductContext=createContext(null);

const Content = (props) => {
    const[products,setProducts]=useState(null);
    useEffect(()=>{
       axiosInstance.get('/products')
       .then(res=>setProducts(res.data))
       .catch(err=>console.log(err))
            
    },[]);
   


  return (
        <ProductContext.Provider value={[products,setProducts]}>{props.children}</ProductContext.Provider>
    
  )
}

export default Content