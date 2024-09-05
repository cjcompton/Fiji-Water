import React from "react";
import Therapist from '../assets/therapist2.jpg';

const About = () => {
    return(
        <>
        <div className="w-full h-full">
            <div className="text-5xl font-bold flex justify-center items-center p-10">How it started</div>
            <div className="w-full h-full columns-2">
                <img src={Therapist}/>
                <div className="text-lg">
                    At Hot Girl Bath Water, we believe that something as essential as water can be a force for good.
                     Our founders, moved by the stories of sexual assault survivors, realized that raising
                     awareness and offering support was not just a necessity—it was their calling.
                     They envisioned a company where everyday purchases could contribute directly to helping survivors
                     reclaim their lives. That’s why we bottle and sell premium water with a purpose, donating a
                     significant portion of our proceeds to organizations that provide resources, advocacy, and
                     healing for survivors of sexual assault. We are more than just a water company—we are a
                     movement for change.
                </div>
            </div>
        </div>
        </>
    );
}

export default About;