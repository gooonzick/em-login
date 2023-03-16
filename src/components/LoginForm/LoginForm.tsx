import { createForm } from "@felte/solid";
import { Component, createEffect, createSignal, Show } from "solid-js";

import { Button } from "../Button";
import { Error } from "../Error";
import { Input } from "../Input";
import { validtor } from "./helpers/validator";
import styles from "./LoginForm.module.css";
import { FormValues } from "./types";

export const LoginForm: Component = () => {
  const [serverError, setServerError] = createSignal("");

  const { form, isSubmitting, isValidating, errors } = createForm<FormValues>({
    onSubmit: async (val) => {
      const promise = new Promise((res, rej) => {
        setTimeout(() => {
          res("a");

          setServerError("Wrong pass");
        }, 3000);
      });

      await promise;
    },
    validate: validtor,
  });

  const isLoading = () => isSubmitting() || isValidating();

  return (
    <form class={styles.container} use:form>
      <p>Welcome back!</p>
      <Show when={serverError()}>
        <Error errorText={serverError()} />
      </Show>
      <Input label="Email" class={styles.input} name="email" />
      <Show when={errors().email}>
        <span class={styles.error}>{errors().email}</span>
      </Show>
      <Input label="Password" class={styles.input} name="password" />
      <Show when={errors().password}>
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
  );
};
