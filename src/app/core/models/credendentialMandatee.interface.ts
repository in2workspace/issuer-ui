
import { Option } from 'src/app/core/models/option.interface';
export interface CredentialMandatee {
  id: string;
  firstname: string;
  lastname: string;
  emailaddress: string;
  mobilephone: string;
  options: Option[];
}