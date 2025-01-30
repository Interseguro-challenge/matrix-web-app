import { Status } from '../interfaces/status.enum';
import { EducationalArea } from './area.model';
import { EducationalAreaCourse } from './educational-area-course.model';
import { User } from './user.model';

export interface EducationalAreaCourseTheme {
  _id: string;
  title: string;
  selectedWeek: number;
  status: Status;
  educationalAreaCourse: EducationalAreaCourse;
  educationalArea: EducationalArea;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
