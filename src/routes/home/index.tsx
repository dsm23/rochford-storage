import type { FunctionComponent } from "react";
import Availability from "~/components/availability";
import Hero from "~/components/hero";
import Location from "~/components/location";

const Home: FunctionComponent = () => (
  <main>
    <h1 className="sr-only">Rochford Storage</h1>
    <Hero id="hero" aria-label="Hero" />
    <Availability
      id="availability"
      capacity={4}
      occupied={1}
      aria-label="Current Capacity"
    />
    <Location />
  </main>
);

export default Home;
