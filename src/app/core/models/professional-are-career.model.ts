import { Status } from '../interfaces/status.enum';
import { ProfessionalArea } from './professional-area.model';
import { User } from './user.model';

export interface ProfessionalAreaCareer {
  _id: string;
  name: string;
  professionalArea: ProfessionalArea;
  status: Status;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
