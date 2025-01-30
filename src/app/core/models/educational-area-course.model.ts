import { Status } from '../interfaces/status.enum';
import { EducationalArea } from './area.model';
import { User } from './user.model';

export interface EducationalAreaCourse {
  _id: string;
  name: string;
  status: Status;
  educationalArea: EducationalArea;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
