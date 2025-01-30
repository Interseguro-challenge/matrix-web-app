import { Status } from '../interfaces/status.enum';
import { User } from './user.model';

export interface ProfessionalArea {
  _id: string;
  name: string;
  description: string;
  status: Status;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
