import { HttpLibrary, RequestContext, ResponseContext } from "./http";
import fetch from "cross-fetch";
import pako from "pako";
import bufferFrom from "buffer-from";

export class IsomorphicFetchHttpLibrary implements HttpLibrary {
  public send(request: RequestContext): Promise<ResponseContext> {
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

    if (!headers["Accept-Encoding"]) {
      if (compress) {
        headers["Accept-Encoding"] = "gzip,deflate";
      } else {
        // We need to enforce it otherwise node-fetch will set a default
        headers["Accept-Encoding"] = "identity";
      }
    }

    const resultPromise = fetch(request.getUrl(), {
      method: method,
      body: body as any,
      headers: headers,
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

    return resultPromise;
  }
}
