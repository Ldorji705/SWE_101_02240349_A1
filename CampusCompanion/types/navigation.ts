export interface Contact {
  id: string;
  name: string;
  phone: string;
}

export type RootStackParamList = {
  Main: undefined;
  ContactDetails: { contact: Contact };
};

export type TabParamList = {
  Home: undefined;
  Contacts: undefined;
  Schedule: undefined;
  Map: undefined;
};