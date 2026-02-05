import Hero from "../components/Hero";
import { Registration } from "../components/Registration";
import SearchDog from "../components/SearchDog";

export default function Home() {
   return (
      <div>
         <Hero />
         <Registration />
         <SearchDog />
      </div>
   );
}
