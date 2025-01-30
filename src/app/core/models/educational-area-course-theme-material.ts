import { EducationalAreaCourseThemeMaterialType } from '../interfaces/educational-area-course-theme-material-type.enum';
import { Status } from '../interfaces/status.enum';
import { EducationalAreaCourseTheme } from './educational-area-course-theme';
import { User } from './user.model';

export interface EducationalAreaCourseThemeMaterial {
  _id: string;
  type: EducationalAreaCourseThemeMaterialType;
  value: string;
  status: Status;
  educationalAreaCourseTheme: EducationalAreaCourseTheme;
  user: User;
  createdAt?: Date;
  updatedAt?: Date;
}
