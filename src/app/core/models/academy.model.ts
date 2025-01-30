import { Status } from "../interfaces/status.enum";
import { User } from "./user.model";

export interface Academy {
  _id: string;
  user: User;
  businessName: string;
  razSocial: string;
  logo: string;
  weeksNumber: number;
  status: Status;
  createdAt?: Date;
  updatedAt?: Date;
}
