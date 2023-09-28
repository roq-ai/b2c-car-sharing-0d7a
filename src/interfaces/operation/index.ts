import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  user_id: string;
  car_id: string;
  operation_type?: string;
  operation_status?: string;
  operation_details?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  car_id?: string;
  operation_type?: string;
  operation_status?: string;
  operation_details?: string;
}
