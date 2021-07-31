import { ThemeSwitchButton } from "../ThemeSwitchButton/";

export const Header = () => {
  return (
    <header className="py-3 px-4 text-dark-text-gray dark:text-white dark:text-opacity-80">
      <div className="flex fixed top-0 left-0 right-0 z-50 bg-[#ecedf3] shadow-sm dark:bg-dark-mode-gray  justify-between items-center md:px-8 md:py-6 p-4">
        <div className="font-rubik font-semibold text-xl leading-9">
          Easy Search
        </div>
        <div>
          <ThemeSwitchButton />
        </div>
      </div>
      <div className="mt-40 mx-auto md:w-4/5 w-full">
        <div className="md:w-3/4 lg:w-3/6 w-full font-rubik lg:text-4xl text-3xl font-medium">
          Get specific results from Google by limiting sites, files, dates and
          more.
        </div>
      </div>
    </header>
  );
};
