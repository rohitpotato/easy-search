import { ThemeSwitchButton } from "../ThemeSwitchButton/";

export const Header = () => {
  return (
    <header className="py-3 px-4 text-dark-text-gray dark:text-white dark:opacity-80">
      <div className="flex justify-between items-center md:px-8 md:py-6">
        <div className="font-rubik font-semibold text-xl leading-9">
          Easy Search
        </div>
        <div>
          <ThemeSwitchButton />
        </div>
      </div>
      <div className="mt-20 mx-auto md:w-4/5 w-full">
        <div className="md:w-3/4 lg:w-3/6 w-full font-rubik lg:text-4xl text-3xl font-medium">
          Get specific results from Google by limiting sites, files, dates and
          more.
        </div>
      </div>
    </header>
  );
};
