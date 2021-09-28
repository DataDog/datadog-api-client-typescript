import { HttpLibrary, RequestContext, ResponseContext } from "./http";
import { from, Observable } from "../rxjsStub";
import fetch from "node-fetch";
import * as zlib from "zlib";

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
        body = zlib.gzipSync(body);
      } else if (headers["Content-Encoding"] == "deflate") {
        body = zlib.deflateSync(body);
      }
    }

    const resultPromise = fetch(request.getUrl(), {
      method: method,
      body: body as any,
      headers: headers,
      compress: compress,
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
