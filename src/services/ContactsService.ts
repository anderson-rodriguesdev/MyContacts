import delay from "../utils/delay";

class ContacsService {
  async listContacts(orderBy: string = `asc`) {
    const response = await fetch(
      `http://localhost:3001/contacts?orderBy=${orderBy}`
    );
    await delay(500);
    return response.json();
  }
}

export default new ContacsService();
