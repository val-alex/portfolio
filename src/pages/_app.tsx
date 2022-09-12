import { CSSReset } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { Chakra } from "@/theme/chakra";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r122/three.min.js"
    );

    document.getElementsByTagName("head")[0].appendChild(threeScript);

    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <Chakra cookies={pageProps.cookies}>
      <CSSReset />
      <Component {...pageProps} />
    </Chakra>
  );
}

export default MyApp;
