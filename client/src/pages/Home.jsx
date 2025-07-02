import React, { useRef } from "react";
import Hero from "../Component/Hero";
import HomeCard from "../Component/HomeCard";
import Logos from "../Component/Logos"
import { data } from "../assets/assets";
import Services from "../Component/Services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurWorkingProcess from "../Component/OurWorkingProcess";
import FooterHireMate from "../Component/FooterHireMate";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  // Create refs for each card
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();
  const card5Ref = useRef();
  const card6Ref = useRef();

  // This runs when the component loads
  useGSAP(() => {
    // Animation for Card 1
    gsap.fromTo(
      card1Ref.current,
      { x: -300, opacity: 0 }, // Start position (off screen left, invisible)
      { 
        x: 0, opacity: 1, // End position (normal position, visible)
        duration: 4,
        scrollTrigger: {
          trigger: card1Ref.current, // When this card enters view
          start: "top 80%", // Start animation when top of card is 80% from top of viewport
          end: "top 50%", // End animation when top of card is 50% from top
          scrub: 1 // Smooth animation as you scroll
        }
      }
    );

    // Animation for Card 2 (same as above but from right side)
    gsap.fromTo(
      card2Ref.current,
      { x: 300, opacity: 0 },
      { 
        x: 0, opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: card2Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );

    // Repeat for all cards...
    gsap.fromTo(
      card3Ref.current,
      { x: -300, opacity: 0 },
      { 
        x: 0, opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: card3Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(
      card4Ref.current,
      { x: 300, opacity: 0 },
      { 
        x: 0, opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: card4Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      }
    );

    gsap.fromTo(
      card5Ref.current,
      { x: -300, opacity: 0 },
      { 
        x: 0, opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: card5Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        }
      }
    );

    gsap.fromTo(
      card6Ref.current,
      { x: 300, opacity: 0 },
      { 
        x: 0, opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: card6Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        }
      }
    );
  }, []);

  return (
    <div className="min-h-[100vh]">
      <Hero />
      <Logos/>
      <Services />
      
      {/* Cards Container */}
      <div className="grid grid-cols-1 pb-40 gap-10 sm:grid-cols-2 px-4 overflow-clip py-20">
        {/* Card 1 */}
        <div ref={card1Ref}>
          <HomeCard
            mainHeading1="Search Engine"
            mainHeading2="Optimization"
            arrowGreen={data.arrowGreen}
            mainImage={data.ll4}
            headingBg="#B9FF66"
            bgColor="#F3F3F3"
            borderColor="black"
            text="#000"
          />
        </div>

        {/* Card 2 */}
        <div ref={card2Ref}>
          <HomeCard
            mainHeading1="Pay-per-click"
            mainHeading2="advertising"
            arrowGreen={data.arrowGreen}
            mainImage={data.ll1}
            headingBg="#FFFFFF"
            bgColor="#B9FF66"
            borderColor="black"
            text="#000"
          />
        </div>

        {/* Card 3 */}
        <div ref={card3Ref}>
          <HomeCard
            mainHeading1="Social Media"
            mainHeading2="Marketing"
            arrowGreen={data.arrowWhite}
            mainImage={data.ll6}
            headingBg="#FFFFFF"
            bgColor="#000000"
            borderColor="black"
            text="#FFF"
          />
        </div>

        {/* Card 4 */}
        <div ref={card4Ref}>
          <HomeCard
            mainHeading1="Email "
            mainHeading2="Marketing"
            arrowGreen={data.arrowGreen}
            mainImage={data.ll2}
            headingBg="#B9FF66"
            bgColor="#F3F3F3"
            borderColor="black"
            text="#000"
          />
        </div>

        {/* Card 5 */}
        <div ref={card5Ref}>
          <HomeCard
            mainHeading1="Content"
            mainHeading2="Creation"
            arrowGreen={data.arrowGreen}
            mainImage={data.ll5}
            headingBg="#FFFFFF"
            bgColor="#B9FF66"
            borderColor="black"
            text="#000"
          />
        </div>

        {/* Card 6 */}
        <div ref={card6Ref}>
          <HomeCard
            mainHeading1="Analytics and"
            mainHeading2="Tracking"
            arrowGreen={data.arrowWhite}
            mainImage={data.ll3}
            headingBg="#FFFFFF"
            bgColor="#000000"
            borderColor="black"
            text="#FFF"
          />
        </div>
      </div>


      <OurWorkingProcess/>
      <FooterHireMate/>
    </div>
  );
};

export default Home;