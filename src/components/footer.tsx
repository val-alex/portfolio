import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Powered by{" "}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  );
};
