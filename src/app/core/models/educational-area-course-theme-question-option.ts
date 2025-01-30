import { OptionType } from '../interfaces/option-type.enum';

export interface EducationalAreaCourseThemeQuestionOption {
  _id: string;
  description?: string;
  picture?: string;
  isCorrect: boolean;
  type: OptionType;
  createdAt?: Date;
  updatedAt?: Date;
}
