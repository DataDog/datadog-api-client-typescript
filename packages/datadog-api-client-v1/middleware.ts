import { RequestContext, ResponseContext } from "./http/http";
import { Observable, of, from } from "./rxjsStub";

/**
 * Defines the contract for a middleware intercepting requests before
 * they are sent (but after the RequestContext was created)
 * and before the ResponseContext is unwrapped.
 *
 */
export interface Middleware {
  /**
   * Modifies the request before the request is sent.
   *
   * @param context RequestContext of a request which is about to be sent to the server
   * @returns an observable of the updated request context
   *
   */
  pre(context: RequestContext): Observable<RequestContext>;
  /**
   * Modifies the returned response before it is deserialized.
   *
   * @param context ResponseContext of a sent request
   * @returns an observable of the modified response context
   */
  post(context: ResponseContext): Observable<ResponseContext>;
}

export class PromiseMiddlewareWrapper implements Middleware {
  public constructor(private middleware: PromiseMiddleware) {}

  pre(context: RequestContext): Observable<RequestContext> {
    return from(this.middleware.pre(context));
  }
  post(context: ResponseContext): Observable<ResponseContext> {
    return from(this.middleware.post(context));
  }
}

/**
 * Defines the contract for a middleware intercepting requests before
 * they are sent (but after the RequestContext was created)
 * and before the ResponseContext is unwrapped.
 *
 */
export interface PromiseMiddleware {
  /**
   * Modifies the request before the request is sent.
   *
   * @param context RequestContext of a request which is about to be sent to the server
   * @returns an observable of the updated request context
   *
   */
  pre(context: RequestContext): Promise<RequestContext>;
  /**
   * Modifies the returned response before it is deserialized.
   *
   * @param context ResponseContext of a sent request
   * @returns an observable of the modified response context
   */
  post(context: ResponseContext): Promise<ResponseContext>;
}

/**
 * A middleware intercepting requests before
 * they are sent (but after the RequestContext was created)
 * and before the ResponseContext is unwrapped for debugging purposes.
 *
 */
export class DebugMiddleWare implements Middleware {
  /**
   * Modifies the request before the request is sent.
   *
   * @param context RequestContext of a request which is about to be sent to the server
   * @returns an observable of the updated request context
   *
   */
  pre(context: RequestContext): Observable<RequestContext> {
    const headers_ = context.getHeaders();
    headers_["DD-API-KEY"] = headers_["DD-API-KEY"].replace(/./g, "x");
    headers_["DD-APPLICATION-KEY"] = headers_["DD-APPLICATION-KEY"].replace(
      /./g,
      "x"
    );

    const headers = JSON.stringify(headers_, null, 2).replace(/\n/g, "\n\t");
    const method = context.getHttpMethod().toString();
    const url = context.getUrl().toString();
    const body = context.getBody()
      ? JSON.stringify(context.getBody(), null, 2).replace(/\n/g, "\n\t")
      : "";
    const compress = context.getHttpConfig().compress || true;

    console.debug(
      "\nrequest: {\n",
      `\turl: ${url}\n`,
      `\tmethod: ${method}\n`,
      `\theaders: ${headers}\n`,
      `\tcompress: ${compress}\n`,
      `\tbody: ${body}\n}\n`
    );

    return of(context);
  }

  /**
   * Modifies the returned response before it is deserialized.
   *
   * @param context ResponseContext of a sent request
   * @returns an observable of the modified response context
   */
  post(context: ResponseContext): Observable<ResponseContext> {
    const httpStatusCode = context.httpStatusCode;
    const headers = JSON.stringify(context.headers, null, 2).replace(
      /\n/g,
      "\n\t"
    );
    const body = context.body
      ? JSON.stringify(context.body, null, 2).replace(/\n/g, "\n\t")
      : "";

    console.debug(
      "response: {\n",
      `\tstatus: ${httpStatusCode}\n`,
      `\theaders: ${headers}\n`,
      `\tbody: ${body}\n}\n`
    );

    return of(context);
  }
}
