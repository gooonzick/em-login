import { Component } from "solid-js";

import logo from "./assets/em-logo.png";

import styles from "./SuccsessLogin.module.css";

type Props = {
  user: {
    email: string;
  };
};

export const SuccsessLogin: Component<Props> = (props) => {
  return (
    <div class={styles["root-container"]}>
      <img src={logo} class={styles.logo} />
      <div class={styles.container}>
        <p style={styles.greeting}>Welcome back, {props.user.email}!</p>
      </div>
    </div>
  );
};
