import { Component, createSignal, onMount } from "solid-js";
import { Transition } from "solid-transition-group";

import { LoginForm } from "./components/LoginForm";
import LoginPage from "./components/LogInPage/LoginPage";
import { Wrapper } from "./components/Wrapper";

const App: Component = () => {
  return <LoginPage />;
};

export default App;
