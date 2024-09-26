import React from "react";
import Therapist from '../assets/therapist2.jpg';
import WaterHand from '../assets/water-hand2.jpg';

/**
 * Need to spice it up or something because right now its pretty boring
 */

const About = () => {
    return (
        <div className="w-full h-full p-5">
            {/* Title Section */}
            <div className="text-center py-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    How it started
                </h1>
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <img 
                    src={Therapist} 
                    alt="Therapist"
                    className="w-full object-cover h-full rounded-lg shadow-md max-w-xl mx-auto"
                />
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl p-5">
                    <p>
                        At Hot Girl Bath Water, we believe that something as essential as water can be a force for good.
                        Our founders, moved by the stories of sexual assault survivors, realized that raising awareness
                        and offering support was not just a necessity—it was their calling. They envisioned a company
                        where everyday purchases could contribute directly to helping survivors reclaim their lives.
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-10">
                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl p-5">
                    <p>
                        That’s why we bottle and sell premium water with a purpose, donating a significant portion of 
                        our proceeds to organizations that provide resources, advocacy, and healing for survivors of 
                        sexual assault. We are more than just a water company—we are a movement for change.
                    </p>
                </div>
                <img 
                    src={WaterHand} 
                    alt="Hand holding water"
                    className="w-full object-cover h-full rounded-lg shadow-md max-w-xl mx-auto"
                />
            </div>
        </div>
    );
}

export default About;
