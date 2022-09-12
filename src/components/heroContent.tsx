import { Box } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import { HeroMessage } from "./heroMessage";

export const HeroContent = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: "hsl(163, 29%, 75%)",
          backgroundColor: "hsl(177, 100%, 14%)",
        })
      );
    }

    return () => {
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Box as="div" ref={vantaRef} minH={"70vh"}>
      <HeroMessage />
    </Box>
  );
};
