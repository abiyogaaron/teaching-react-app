export type HTTPMethod = 'POST' | 'GET' | 'PUT' | 'DELETE';

export interface IGETUsersResponse {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  id: string;
  gender: string;
  street_address: string;
  city: string;
  credit_card_no: string;
  credit_card_type: string;
}