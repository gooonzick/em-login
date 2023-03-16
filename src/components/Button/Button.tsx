import cls from "classnames";
import { Component, JSX, Show } from "solid-js";
import { Loader } from "../Loader";

import styles from "./Button.module.css";

type Props = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

const Button: Component<Props> = (props) => {
  const isDisabled = () => props.isLoading;

  return (
    <button
      {...props}
      disabled={isDisabled()}
      class={cls(styles.button, props.class, {
        [styles.enabled]: !isDisabled(),
        [styles.disabled]: isDisabled(),
      })}
    >
      <Show when={props.isLoading}>
        <div class={styles["loader-container"]}>
          <Loader />
        </div>
      </Show>
      <Show when={!props.isLoading}>{props.children}</Show>
    </button>
  );
};

export { Button };
