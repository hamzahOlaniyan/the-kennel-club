import Hero from "../components/Hero";
import { RegisterServiceSection } from "../components/RegisterServiceSection";
import { Registration } from "../components/Registration";
import SearchDog from "../components/SearchDog";
import { useAuth } from "../providers/AuthProvider";

export default function Home() {
   return (
      <div>
         <Hero />
         <Registration />
         <RegisterServiceSection />
         {/* <SearchDog /> */}
      </div>
   );
}
