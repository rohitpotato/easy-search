import { useEffect } from "react";
import { Container } from "../components/Container";
import { useThemeMode } from "../hooks/useThemeMode";
import { handleThemeInit } from "../utils";

export default function Home() {
  useThemeMode();
  useEffect(() => {
    handleThemeInit();
  }, []);

  return <Container />;
}
