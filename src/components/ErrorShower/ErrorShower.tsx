import { Component } from "solid-js";
import styles from "./ErrorShower.module.css";

type Props = {
  errorText: string;
};

const ErrorShower: Component<Props> = (props) => {
  return (
    <div class={styles.container}>
      <span>{props.errorText}</span>
    </div>
  );
};

export default ErrorShower;
