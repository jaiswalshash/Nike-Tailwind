import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SpecialOffers from "./sections/SpecialOffers";
import Services from "./sections/Services";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative">
      <Navigation />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
};

export default App;
