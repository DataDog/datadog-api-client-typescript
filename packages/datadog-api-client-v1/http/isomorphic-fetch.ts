import {HttpLibrary, RequestContext, ResponseContext} from './http';
import { from, Observable } from '../rxjsStub';
import fetch from "node-fetch";

export class IsomorphicFetchHttpLibrary implements HttpLibrary {

    public send(request: RequestContext): Observable<ResponseContext> {
        let method = request.getHttpMethod().toString();
        let body = request.getBody();

        let compress = request.getHttpConfig().compress;
        if (compress === undefined) {
            compress = true;
        }

        const resultPromise = fetch(request.getUrl(), {
            method: method,
            body: body as any,
            headers: request.getHeaders(),
            compress: compress,
        }).then((resp: any) => {
            const headers: { [name: string]: string } = {};
            resp.headers.forEach((value: string, name: string) => {
              headers[name] = value;
            });

            const body = {
              text: () => resp.text(),
              binary: () => resp.buffer()
            };
            return new ResponseContext(resp.status, headers, body);
        });

        return from<Promise<ResponseContext>>(resultPromise);

    }
}
