import { createForm } from "@felte/solid";
import { Component, createSignal, Show } from "solid-js";

import { Button } from "../Button";
import { ErrorShower } from "../ErrorShower";
import { Input } from "../Input";

import { useFormContext } from "../Wrapper/Wrapper";

import { validtor } from "./helpers/validator";
import logo from "./assets/em-logo.png";

import { FormValues } from "./types";

import styles from "./LoginForm.module.css";

type Props = {
  onSuccess: (user: { email: string }) => void;
};

export const LoginForm: Component<Props> = (props) => {
  const [serverError, setServerError] = createSignal("");

  const isValidCase = useFormContext();

  const { form, isSubmitting, errors } = createForm<FormValues>({
    onSubmit: async (val) => {
      try {
        const promise = new Promise((res, rej) => {
          setTimeout(() => {
            if (isValidCase && isValidCase()) {
              res("OK");
            } else {
              rej("Wrong pass");
            }
          }, 3000);
        });

        await promise;
        props.onSuccess(val);
      } catch (error) {
        if (typeof error === "string") {
          setServerError(error);

          return;
        }

        if (error instanceof Error) {
          setServerError(error.message);
          return;
        }

        setServerError("Unknown error");
      }
    },
    validate: validtor,
  });

  const isLoading = () => isSubmitting();

  const isEmailError = () => Boolean(errors().email);
  const isPasswordError = () => Boolean(errors().password);

  return (
    <div class={styles["root-container"]}>
      <img src={logo} class={styles.logo} />
      <form class={styles.container} use:form>
        <p class={styles.greeting}>The Martians salute you!</p>
        <Show when={serverError()}>
          <ErrorShower errorText={serverError()} />
        </Show>
        <Input
          label="Email"
          class={styles.input}
          name="email"
          hasError={isEmailError()}
        />
        <Show when={isEmailError()}>
          <span class={styles.error}>{errors().email}</span>
        </Show>
        <Input
          label="Password"
          class={styles.input}
          name="password"
          hasError={isPasswordError()}
        />
        <Show when={isPasswordError()}>
          <span class={styles.error}>{errors().password}</span>
        </Show>

        <Button
          type="submit"
          isLoading={isLoading()}
          class={styles["submit-button"]}
        >
          Log In
        </Button>
      </form>
    </div>
  );
};
