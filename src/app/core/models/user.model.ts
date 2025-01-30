import { Status } from '../interfaces/status.enum';
import { UserType } from '../interfaces/user-type.enum';

export interface User {
  _id: string;
  email: string;
  password: string;
  status: Status;
  type: UserType;
  subscriptionStatus: string;
  //   subscriptionPlan: UserSubscription;
}
