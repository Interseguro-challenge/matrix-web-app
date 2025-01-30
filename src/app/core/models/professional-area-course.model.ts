import { Status } from '../interfaces/status.enum';
import { EducationalAreaCourse } from './educational-area-course.model';
import { ProfessionalArea } from './professional-area.model';
import { User } from './user.model';

export interface ProfessionalAreaCourse {
  _id: string;
  course: EducationalAreaCourse;
  professionalArea: ProfessionalArea;
  questionsNumber: number;
  status: Status;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
