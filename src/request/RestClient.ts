interface IRequest<T = any> {
  code: number
  message: string
  payload: T
}

const defaultHeaders = {
  'Content-Type': 'application/json'
};

export class RestClient {

  request = <T = any>(url: string, options: RequestInit = {}): Promise<T> => {
    const requestOptions = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers
      }
    };

    return fetch(url, requestOptions)
      .then(res => res.json() as unknown as IRequest<T>)
      .then(this.handleRequestError)
      .catch(this.handleFatalError);
  };

  get = <T = any>(url: string, options?: RequestInit) => this.request<T>(url, options);

  post = <T = any>(url: string, data: object, options?: RequestInit) =>
    this.request<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    });

  put = <T = any>(url: string, data: object, options?: RequestInit) =>
    this.request<T>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    });

  deleteRequest = <T = any>(url: string, options?: RequestInit) =>
    this.request<T>(url, {
      ...options,
      method: 'DELETE'
    });

  handleRequestError<T>(res: IRequest<T>): T {
    if (res.code === 200) {
      return res.payload;
    } else {
      throw new Error(res.message);
    }
  }

  handleFatalError(err: Error): never {
    throw err;
  }
}