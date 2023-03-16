import { Component, createSignal } from "solid-js";

import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { LoginForm } from "./components/LoginForm";

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(false);

  const onClick = () => setIsLoading(true);

  return <LoginForm />;
};

export default App;
