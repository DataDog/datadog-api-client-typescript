import {
  HttpLibrary,
  RequestContext,
  ResponseContext,
  ZstdCompressorCallback,
} from "./http";
import fetch from "cross-fetch";
import pako from "pako";
import bufferFrom from "buffer-from";

export class IsomorphicFetchHttpLibrary implements HttpLibrary {
  public debug = false;
  public zstdCompressorCallback: ZstdCompressorCallback | undefined;

  public send(request: RequestContext): Promise<ResponseContext> {
    if (this.debug) {
      this.logRequest(request);
    }
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
      } else if (headers["Content-Encoding"] == "zstd1") {
        if (this.zstdCompressorCallback) {
          body = this.zstdCompressorCallback(body);
        } else {
          throw new Error("zstdCompressorCallback method missing");
        }
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
      const response = new ResponseContext(resp.status, headers, body);
      if (this.debug) {
        this.logResponse(response);
      }
      return response;
    });

    return resultPromise;
  }

  private logRequest(request: RequestContext): void {
    const headers: { [key: string]: string } = {};
    const originalHeaders = request.getHeaders();
    for (const header in originalHeaders) {
      headers[header] = originalHeaders[header];
    }
    if (headers["DD-API-KEY"]) {
      headers["DD-API-KEY"] = headers["DD-API-KEY"].replace(/./g, "x");
    }
    if (headers["DD-APPLICATION-KEY"]) {
      headers["DD-APPLICATION-KEY"] = headers["DD-APPLICATION-KEY"].replace(
        /./g,
        "x"
      );
    }

    const headersJSON = JSON.stringify(headers, null, 2).replace(/\n/g, "\n\t");
    const method = request.getHttpMethod().toString();
    const url = request.getUrl().toString();
    const body = request.getBody()
      ? JSON.stringify(request.getBody(), null, 2).replace(/\n/g, "\n\t")
      : "";
    const compress = request.getHttpConfig().compress ?? true;

    console.debug(
      "\nrequest: {\n",
      `\turl: ${url}\n`,
      `\tmethod: ${method}\n`,
      `\theaders: ${headersJSON}\n`,
      `\tcompress: ${compress}\n`,
      `\tbody: ${body}\n}\n`
    );
  }

  private logResponse(response: ResponseContext): void {
    const httpStatusCode = response.httpStatusCode;
    const headers = JSON.stringify(response.headers, null, 2).replace(
      /\n/g,
      "\n\t"
    );
    console.debug(
      "response: {\n",
      `\tstatus: ${httpStatusCode}\n`,
      `\theaders: ${headers}\n`
    );
  }
}
