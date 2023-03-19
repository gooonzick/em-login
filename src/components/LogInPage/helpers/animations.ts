export const onFormEnter = (el: Element, done: VoidFunction) => {
  const a = el.animate(
    [
      { opacity: 0, transform: "translateX(+500px)" },
      { opacity: 1, transform: "translateX(0px)" },
    ],
    {
      duration: 500,
    }
  );
  a.finished.then(done);
};

export const onFormExit = (el: Element, done: VoidFunction) => {
  const a = el.animate(
    [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(-500px)" },
    ],
    {
      duration: 500,
    }
  );
  a.finished.then(done);
};
