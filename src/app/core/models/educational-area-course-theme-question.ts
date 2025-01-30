import { QuestionType } from '../interfaces/question-type.enum';
import { EducationalAreaCourseTheme } from './educational-area-course-theme';
import { EducationalAreaCourseThemeQuestionOption } from './educational-area-course-theme-question-option';
import { User } from './user.model';

export interface EducationalAreaCourseThemeQuestion {
  _id: string;
  description: string;
  picture?: string;
  options?: EducationalAreaCourseThemeQuestionOption[];
  educationalAreaCourseTheme: EducationalAreaCourseTheme;
  user: User | string;
  type: QuestionType;
  isASubQuestion: boolean;
  fatherQuestion?: EducationalAreaCourseThemeQuestion;
  isACase: boolean;
  allowMultipleAnswers: boolean;
  questions?: EducationalAreaCourseThemeQuestion[];
  createdAt?: Date;
  updatedAt?: Date;
}
