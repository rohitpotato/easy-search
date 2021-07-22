import { ThemeProvider } from "../Context/ThemeContext";
import { Container } from "../components/Container";

export default function Home() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}
