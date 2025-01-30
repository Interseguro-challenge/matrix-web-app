import { AcademyCodeStatus } from '../interfaces/academy-code-status.enum';
import { User } from './user.model';

export interface AcademyCode {
  _id: string;
  status: AcademyCodeStatus;
  user: User;
  code: string;
  availableFrom: Date;
  availableTo: Date;
  destinationMail?: string;
  createdAt?: Date;
}
