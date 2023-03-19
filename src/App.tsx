import { Component, createSignal } from "solid-js";
import { Transition } from "solid-transition-group";

import { LoginForm } from "./components/LoginForm";
import { Wrapper } from "./components/Wrapper";

const App: Component = () => {
  const [step, setStep] = createSignal(1);

  const isFormVisible = () => step() === 1;

  return (
    <Wrapper>
      <Transition
        onEnter={(el, done) => {
          const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 10000,
            delay: 10000,
          });

          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 600,
          });
          a.finished.then(done);
        }}
      >
        {isFormVisible() && <LoginForm />}
      </Transition>
    </Wrapper>
  );
};

export default App;
