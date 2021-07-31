import Image from "next/image";
import { Emoji } from "../Emoji";

export const Footer = () => {
  return (
    <div className="dark:text-white dark:text-opacity-80 text-dark-text-gray font-rubik">
      <div>
        <div className="flex gap-1 items-center">
          <span>Made with</span>
          <Emoji symbol="❤️" label="love" />
          <span>by Rohit Kashyap</span>
        </div>
        <div className="flex items-center gap-3 justify-center mt-3">
          <a
            href="https://github.com/rohitpotato"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/github.png"
              alt="github"
              height="48"
              width="48"
            />
          </a>
          <a
            href="https://twitter.com/rohitpotato"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/icons/twitter.png"
              alt="github"
              height="48"
              width="48"
              className="rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
