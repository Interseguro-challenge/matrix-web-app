import { User } from "./user.model";

export interface TeacherReferralCode {
  _id: string;
  user: User;
  code: string;
  createdAt?: Date;
}
