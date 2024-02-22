import EventsSection from "./events-section";
import Hero from "./hero";
import OffersSection from "./offers-section";
import StoresSection from "./stores-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoresSection />
      <EventsSection />
      <OffersSection />
    </main>
  );
}
