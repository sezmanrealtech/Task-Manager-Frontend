import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import help from "../assets/Component 1.png";
import man from "../assets/man.png";
import woman from "../assets/woman.png";

const CoverPages = () => {
  const homeImages = [help, man, woman];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //State to control whether the transition is effect is active
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // set up an interval to change the images every 6 seconds
    const animation = setInterval(() => {
      setIsTransitioning(true); // start the transition effect

      //After 2.secs update the current image index and stop the transitioning effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          //calculate the next image index (loop back to the first image if at the end  )
          return (prevIndex + 1) % homeImages.length;
        });
        setIsTransitioning(false); // end the transition effect
      }, 500);
    }, 2500);

    //clean up function of setInterval when the component unmounts
    return () => {
      clearInterval(animation);
    };
  }, [homeImages.length]);
  return (
    <main className="homepage-con">
      <div className="home-content">
        <div className="home-text text-start">
          <h1 className="m-0">
            Manage your Tasks on <span>TaskDuty</span>
          </h1>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link className="home-a" to={"/task"}>
            Go to My Tasks
          </Link>
        </div>
        {/* ================== */}
        <div className="home-img">
          <img
            // applying the change className if transitioning is true and removing "chnage" when its false
            className={`illu ${isTransitioning ? "change" : ""}`}
            src={homeImages[currentImageIndex]}
            alt=""
            style={{
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default CoverPages;
