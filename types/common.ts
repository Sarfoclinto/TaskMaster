import { Task } from "./task";

export interface ModalParams {
  open: boolean;
  data?: Task | null;
}
