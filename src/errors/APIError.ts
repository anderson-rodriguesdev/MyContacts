export default class APIError extends Error {
  name: string;
  message: string;
  response: Response;
  constructor(response: Response, body: any) {
    super();

    this.name = "APIError";
    this.response = response;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
