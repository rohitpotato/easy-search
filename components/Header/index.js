import { ThemeSwitchButton } from "../ThemeSwitchButton/";

export const Header = () => {
  return (
    <>
      <nav className="flex justify-end absolute -mt-5  md:right-6 right-3">
        <ThemeSwitchButton />
      </nav>
      <header className="text-center">
        <div className="p-8 flex justify-center items-center flex-col space-y-3 dark:text-white">
          <div className="text-4xl font-bold font-titilium">Easy Search</div>
          <div className="font-titilium tracking-widest leading-7 text-base text-center ">
            Get specific results from Google by limiting sites, files, dates and
            more
          </div>
        </div>
      </header>
    </>
  );
};
