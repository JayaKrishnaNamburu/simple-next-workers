import { wrap } from "comlink";
import SimpleWorker from "./simple.worker";

const api = wrap(new SimpleWorker());
const { greeting } = api;

export { greeting };
