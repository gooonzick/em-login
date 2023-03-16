import cls from "classnames";
import { Component, createEffect, JSX, splitProps } from "solid-js";

import styles from "./Input.module.css";

type Props = JSX.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  class?: string;
};

const Input: Component<Props> = (props) => {
  const [_, inputProps] = splitProps(props, ["label", "class"]);

  return (
    <div class={cls(styles.container, props.class)}>
      <label class={styles["input-box"]}>
        <input
          type="text"
          class={styles.input}
          {...inputProps}
          placeholder=" "
        />
        <span class={cls(styles.label)}>{props.label}</span>
      </label>
    </div>
  );
};

export { Input };
