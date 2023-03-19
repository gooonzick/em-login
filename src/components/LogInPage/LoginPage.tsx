import { Component, createEffect, createSignal, onMount, Show } from "solid-js";
import { createStore } from "solid-js/store";
import { Transition } from "solid-transition-group";

import { LoginForm } from "../LoginForm";
import { SuccsessLogin } from "../SuccsessLogin";
import { Wrapper } from "../Wrapper";

import { onFormEnter, onFormExit } from "./helpers/animations";

const LoginPage: Component = () => {
  const [step, setStep] = createSignal(0);
  const [user, setUser] = createStore({ email: "" });

  onMount(() => {
    setTimeout(() => {
      setStep(1);
    }, 100);
  });

  const onSuccessLogin = (data: { email: string }) => {
    setUser("email", data.email);

    setStep(2);
  };

  const isFormVisible = () => step() === 1;
  const isSuccessVisible = () => step() === 2;

  return (
    <Wrapper>
      <Transition mode="outin" onEnter={onFormEnter} onExit={onFormExit}>
        <Show when={isFormVisible()}>
          <LoginForm onSuccess={onSuccessLogin} />
        </Show>
        <Show when={isSuccessVisible()}>
          <SuccsessLogin user={user} />
        </Show>
      </Transition>
    </Wrapper>
  );
};

export default LoginPage;
