import { expose } from "comlink";

const greeting = () => {
  return "Hello";
};

expose({
  greeting
});
