import { Component } from "solid-js";
import styles from "./Error.module.css";

type Props = {
  errorText: string;
};

const Error: Component<Props> = (props) => {
  return (
    <div class={styles.container}>
      <span>{props.errorText}</span>
    </div>
  );
};

export default Error;
