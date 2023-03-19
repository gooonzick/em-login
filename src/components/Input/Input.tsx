import cls from "classnames";
import { Component, createEffect, JSX, splitProps } from "solid-js";

import styles from "./Input.module.css";

type Props = JSX.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  class?: string;
  hasError?: boolean;
};

const Input: Component<Props> = (props) => {
  const [_, inputProps] = splitProps(props, ["label", "class", "hasError"]);

  return (
    <div class={cls(styles.container, props.class)}>
      <label class={styles["input-box"]}>
        <input
          class={cls(styles.input, { [styles.error]: props.hasError })}
          {...inputProps}
          placeholder=" "
        />
        <span class={cls(styles.label, { [styles.error]: props.hasError })}>
          {props.label}
        </span>
      </label>
    </div>
  );
};

export { Input };
