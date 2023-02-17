import { HttpClient } from "./utils/HttpClient";

class ContacsService {
  //note for adjusment
  httpClient: any;
  constructor() {
    this.httpClient = new HttpClient("http://localhost:3001");
  }
  async listContacts(orderBy: string = `asc`) {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact: {}) {
    return this.httpClient.post("/contacts", contact);
  }
}

export default new ContacsService();
