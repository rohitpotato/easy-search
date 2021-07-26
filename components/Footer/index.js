export const Footer = () => {
  return (
    <div className="text-black dark:text-white font-titilium tracking-widest leading-6 font-semibold">
      Made with love by{" "}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.notion.so/Rohit-Kashyap-cc84da73c0534f249ce3757956f5851b"
      >
        <b className="text-red-500">Rohit Kashyap</b>
      </a>
      -- View code on{" "}
      <a
        target="_blank"
        rel="noreferrer"
        className="text-red-500"
        href="https://github.com/rohitpotato/easy-search"
      >
        <b>Github</b>
      </a>
      --
      <div className="text-center justify-center flex mt-2">
        <a
          href="https://twitter.com/rohitpotato?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-show-count="false"
        >
          Follow @TwitterDev
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
    </div>
  );
};
