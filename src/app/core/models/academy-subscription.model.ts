import { MercadoPagoSubscription } from './mercado-pago/mercado-pago-subscription';
import { User } from './user.model';

export interface AcademySubscription {
  _id: string;
  user: User;
  accNumber: number;
  retailPrice: number;
  descount: number;
  salePrice: number;
  mercadoPagoSubscription: MercadoPagoSubscription;
  nextAvailbleUpdateDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
