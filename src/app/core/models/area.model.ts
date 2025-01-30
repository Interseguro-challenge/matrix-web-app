import { Status } from '../interfaces/status.enum';
import { User } from './user.model';

export interface EducationalArea {
  _id: string;
  name: string;
  status: Status;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
