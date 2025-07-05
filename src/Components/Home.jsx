import NavBar from "./NavBar";
import Cards from "../Components/Cards";

const Home = () => {
  return (
    <div className="flex h-screen">
      <div className="w-[16%] bg-zinc-100 h-full">
        <NavBar />
      </div>
      <div className="w-[84%] overflow-y-auto h-full">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
