import { userAgent } from "../../../userAgent";
// TODO: evaluate if we can easily get rid of this library
import FormData from "form-data";
import { isBrowser } from "../util";
import { COLLECTION_FORMATS } from "../baseapi";

/**
 * Interface for aborting fetch requests.
 */
export interface AbortSignal {
  aborted: boolean;
  reason: any;

  addEventListener: (
    type: "abort",
    listener: (this: AbortSignal, event: any) => any,
    options?:
      | boolean
      | {
          capture?: boolean;
          once?: boolean;
          passive?: boolean;
        }
  ) => void;

  removeEventListener: (
    type: "abort",
    listener: (this: AbortSignal, event: any) => any,
    options?:
      | boolean
      | {
          capture?: boolean;
        }
  ) => void;

  dispatchEvent: (event: any) => boolean;

  onabort: null | ((this: AbortSignal, event: any) => void);

  throwIfAborted(): void;
}

/**
 * Represents an HTTP method.
 */
export enum HttpMethod {
  GET = "GET",
  HEAD = "HEAD",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  CONNECT = "CONNECT",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  PATCH = "PATCH",
}

/**
 * Represents an HTTP file which will be transferred from or to a server.
 */
export type HttpFile = {
  data: Buffer;
  name: string;
};

export class HttpException extends Error {
  public constructor(msg: string) {
    super(msg);
  }
}

/**
 * Represents the body of an outgoing HTTP request.
 */
export type RequestBody = undefined | string | Buffer | FormData;

/**
 * Represents an HTTP transport configuration.
 */
export interface HttpConfiguration {
  compress?: boolean;
  signal?: AbortSignal;
}

/**
 * Represents an HTTP request context
 */
export class RequestContext {
  private headers: { [key: string]: string } = {};
  private body: RequestBody = undefined;
  private url: URL;
  private httpConfig: HttpConfiguration = {};

  /**
   * Creates the request context using a http method and request resource url
   *
   * @param url url of the requested resource
   * @param httpMethod http method
   */
  public constructor(url: string, private httpMethod: HttpMethod) {
    this.url = new URL(url);
    if (!isBrowser) {
      this.headers = { "user-agent": userAgent };
    }
  }

  /*
   * Returns the url set in the constructor including the query string
   *
   */
  public getUrl(): string {
    return this.url.toString();
  }

  /**
   * Replaces the url set in the constructor with this url.
   *
   */
  public setUrl(url: string): void {
    this.url = new URL(url);
  }

  /**
   * Sets the body of the http request either as a string or FormData
   *
   * Note that setting a body on a HTTP GET, HEAD, DELETE, CONNECT or TRACE
   * request is discouraged.
   * https://httpwg.org/http-core/draft-ietf-httpbis-semantics-latest.html#rfc.section.7.3.1
   *
   * @param body the body of the request
   */
  public setBody(body: RequestBody): void {
    this.body = body;
  }

  public getHttpMethod(): HttpMethod {
    return this.httpMethod;
  }

  public getHeaders(): { [key: string]: string } {
    return this.headers;
  }

  public getBody(): RequestBody {
    return this.body;
  }

  /**
   * Sets query parameters on the request URL
   *
   * @param name the name of the query parameter
   * @param value the value of the query parameter
   * @param collectionFormat the format of the query parameter See https://spec.openapis.org/oas/v3.0.2#style-values
  */
  public setQueryParam(name: string, value: string | string[], collectionFormat: string): void {
    if (collectionFormat === "multi") {
      for (const val of value) {
        this.url.searchParams.append(name, val);
      }
      return;
    }

    if (Array.isArray(value)) {
      const delimiter = COLLECTION_FORMATS[collectionFormat as keyof typeof COLLECTION_FORMATS];
      value = value.join(delimiter);
    }

    return this.url.searchParams.set(name, value);
  }

  /**
   * Sets a cookie with the name and value. NO check  for duplicate cookies is performed
   *
   */
  public addCookie(name: string, value: string): void {
    if (!this.headers["Cookie"]) {
      this.headers["Cookie"] = "";
    }
    this.headers["Cookie"] += name + "=" + value + "; ";
  }

  public setHeaderParam(key: string, value: string): void {
    this.headers[key] = value;
  }

  public setHttpConfig(conf: HttpConfiguration): void {
    this.httpConfig = conf;
  }

  public getHttpConfig(): HttpConfiguration {
    return this.httpConfig;
  }
}

export interface ResponseBody {
  text(): Promise<string>;
  binary(): Promise<Buffer>;
}

/**
 * Helper class to generate a `ResponseBody` from binary data
 */
export class SelfDecodingBody implements ResponseBody {
  constructor(private dataSource: Promise<Buffer>) {}

  binary(): Promise<Buffer> {
    return this.dataSource;
  }

  async text(): Promise<string> {
    const data: Buffer = await this.dataSource;
    return data.toString();
  }
}

export class ResponseContext {
  public constructor(
    public httpStatusCode: number,
    public headers: { [key: string]: string },
    public body: ResponseBody
  ) {}

  /**
   * Parse header value in the form `value; param1="value1"`
   *
   * E.g. for Content-Type or Content-Disposition
   * Parameter names are converted to lower case
   * The first parameter is returned with the key `""`
   */
  public getParsedHeader(headerName: string): { [parameter: string]: string } {
    const result: { [parameter: string]: string } = {};
    if (!this.headers[headerName]) {
      return result;
    }

    const parameters = this.headers[headerName].split(";");
    for (const parameter of parameters) {
      let [key, value] = parameter.split("=", 2);
      key = key.toLowerCase().trim();
      if (value === undefined) {
        result[""] = key;
      } else {
        value = value.trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.substring(1, value.length - 1);
        }
        result[key] = value;
      }
    }
    return result;
  }

  public async getBodyAsFile(): Promise<HttpFile> {
    const data = await this.body.binary();
    const fileName =
      this.getParsedHeader("content-disposition")["filename"] || "";
    return { data, name: fileName };
  }
}

export type ZstdCompressorCallback = (body: string) => Buffer;

export interface HttpLibrary {
  enableRetry?: boolean | undefined;
  maxRetries?: number;
  backoffBase?: number;
  backoffMultiplier?: number;
  debug?: boolean;
  fetch?: any;
  zstdCompressorCallback?: ZstdCompressorCallback;
  send(request: RequestContext): Promise<ResponseContext>;
}