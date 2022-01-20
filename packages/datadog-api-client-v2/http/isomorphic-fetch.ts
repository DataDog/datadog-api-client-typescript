import { HttpLibrary, RequestContext, ResponseContext } from "./http";
import { from, Observable } from "../rxjsStub";
import fetch from "node-fetch";
import pako from "pako";
import bufferFrom from "buffer-from";

export class IsomorphicFetchHttpLibrary implements HttpLibrary {
  public send(request: RequestContext): Observable<ResponseContext> {
    const method = request.getHttpMethod().toString();
    let body = request.getBody();

    let compress = request.getHttpConfig().compress;
    if (compress === undefined) {
      compress = true;
    }

    const headers = request.getHeaders();
    if (typeof body === "string") {
      if (headers["Content-Encoding"] == "gzip") {
        body = bufferFrom(pako.gzip(body).buffer);
      } else if (headers["Content-Encoding"] == "deflate") {
        body = bufferFrom(pako.deflate(body).buffer);
      }
    }

    const resultPromise = fetch(request.getUrl(), {
      method: method,
      body: body as any,
      headers: headers,
      compress: compress,
      signal: request.getHttpConfig().signal,
    }).then((resp: any) => {
      const headers: { [name: string]: string } = {};
      resp.headers.forEach((value: string, name: string) => {
        headers[name] = value;
      });

      const body = {
        text: () => resp.text(),
        binary: () => resp.buffer(),
      };
      return new ResponseContext(resp.status, headers, body);
    });

    return from<Promise<ResponseContext>>(resultPromise);
  }
}
