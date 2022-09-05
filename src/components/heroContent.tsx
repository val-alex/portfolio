import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";
import { HeroMessage } from "./heroMessage";

export const HeroContent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: "#004643",
          color1: "#e8e4e6",
          color2: "#fffffe",
        })
      );
    }
    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Box as="div" ref={vantaRef}>
      <HeroMessage />
    </Box>
  );
};

export default HeroContent;
