import { Roles } from './role.enum';

export type Users = {
  id_user: string;
  first_name: string;
  last_name: string;
  email: string;
  role: Roles;
  is_active: boolean;
  is_verified: boolean;
};
