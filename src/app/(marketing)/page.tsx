import { Background, Companies, Connect, Container, CTA, Features, Hero, Perks, Pricing, Reviews, Wrapper } from "@/components";
import { Spotlight } from "@/components/ui/spotlight";

const HomePage = () => {
  return (
    <Background>
      <Wrapper className="py-20 relative">
        {/* Hero */}
        <div id="home" className="relative">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <Hero />
        </div>

        {/* Companies
        <div id="companies" className="py-8 lg:py-20">
          <Companies />
        </div> */}

        {/* Contact */}
        <div id="contact">
          <Connect />
        </div>

        {/* Benefits */}
        <div id="benefits">
          {/* <Features /> */}
          <Perks />
        </div>

        {/* Pricing
        <div id="pricing">
          <Pricing />
        </div> */}

        {/* Reviews
        <div id="reviews">
          <Reviews />
        </div> */}

        {/* CTA */}
        <div id="cta">
          <CTA />
        </div>
      </Wrapper>
    </Background>
  );
};

export default HomePage;
