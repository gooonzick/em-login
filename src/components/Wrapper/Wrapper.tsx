import {
  Accessor,
  Component,
  createContext,
  createEffect,
  createSignal,
  JSXElement,
  useContext,
} from "solid-js";
import cls from "classnames";
import styles from "./Wrapper.module.css";
import { Button } from "../Button";

export const FormConext = createContext<() => boolean>();

export const useFormContext = () => useContext(FormConext);

type Props = {
  children: JSXElement;
};

export const Wrapper: Component<Props> = (props) => {
  const [isValid, setIsValid] = createSignal(true);

  const onValidSelect = () => setIsValid(true);
  const onInvalidSelect = () => setIsValid(false);

  const value = () => isValid();

  return (
    <FormConext.Provider value={value}>
      <div class={styles["button-container"]}>
        <Button
          class={cls(styles.button, { [styles.inactive]: !isValid() })}
          onClick={onValidSelect}
        >
          Valid
        </Button>
        <Button
          class={cls({ [styles.inactive]: isValid() })}
          onClick={onInvalidSelect}
        >
          Invalid
        </Button>
      </div>
      {props.children}
    </FormConext.Provider>
  );
};
