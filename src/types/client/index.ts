export interface Client {
  id: string;
  name: string;
  email: string;
}

export interface ClientData {
  clients: Client[];
}
