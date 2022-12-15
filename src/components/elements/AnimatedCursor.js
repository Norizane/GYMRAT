import React from "react";
import AnimatedCursor from "react-animated-cursor";

const AnimCursor = () => {
    return (
        <AnimatedCursor
            innerSize={12}
            outerSize={20}
            color=' 255,255,255 '
            outerAlpha={0.5}
            innerScale={0.7}
            outerScale={2}
            clickables={[
                "a",
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'input[type="password"]',
                "label[for]",
                "select",
                "textarea",
                "button",
                ".link",
            ]}
        />
    );
};

export default AnimCursor;
