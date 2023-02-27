import delay from "../../utils/delay";
import APIError from "../../errors/APIError";

interface Options {
  method: string;
  body?: object;
}

class HttpClient {
  baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  get(path: string) {
    return this.makeResquest(path, {
      method: "GET",
    });
  }
  post(path: string, body: object) {
    return this.makeResquest(path, {
      method: "POST",
      body,
    });
  }

  async makeResquest(path: string, options: Options) {
    await delay(500);

    const headers = new Headers();
    if (options.body) {
      headers.append("Content-Type", "application/json");
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    let responseBody = null;
    const contentType = response.headers.get("Content-Type");
    if (contentType?.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }
    throw new APIError(response, responseBody);
  }
}

export { HttpClient };
