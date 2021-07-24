import { ThemeProvider } from "../Context/ThemeContext";
import { Container } from "../components/Container";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="bg-gray-200 dark:bg-black">
        <Container />
      </div>
    </ThemeProvider>
  );
}
