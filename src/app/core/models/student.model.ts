import { Status } from "../interfaces/status.enum";
import { Academy } from "./academy.model";
import { User } from "./user.model";

export interface Teacher {
  _id: string;
  user: User;
  name: string;
  lastName: string;
  photo: string;
  academy?: Academy;
  status: Status;
  createdAt?: Date;
  updatedAt?: Date;
}
