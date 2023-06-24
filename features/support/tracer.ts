import { tracer } from "dd-trace";
import { HTTP_HEADERS } from "dd-trace/ext/formats";

const lib =
  require("../../packages/datadog-api-client-common/http/isomorphic-fetch").IsomorphicFetchHttpLibrary;
const libSend = lib.prototype.send;

function wrap(method: any) {
  function send(this: any, request: any): any {
    const instance = this;
    return tracer.trace(
      "fetch",
      { type: "http", resource: request.getUrl() },
      (span: any, callback?: (error?: Error) => string) => {
        const carrier: { [name: string]: string }  = {};
        tracer.inject(span, HTTP_HEADERS, carrier);
        for (const name in carrier) {
           request.setHeaderParam(name, carrier[name]);
        }

        /*
        const spanId = span.context().toSpanId();
        const traceId = span.context().toTraceId();
        request.setHeaderParam("x-datadog-parent-id", spanId);
        request.setHeaderParam("x-datadog-trace-id", traceId);
        // These headers are required to prevent the continuation of the trace from being dropped
        request.setHeaderParam("x-datadog-origin", "ciapp-test");
        request.setHeaderParam("x-datadog-sampling-priority", "1");
        */
        const response = method.apply(instance, [request]);

        response.finally(() => {
          if (callback) {
            callback()
          }
        });

        return response;
      }
    );
  }
  return send;
}

lib.prototype.send = wrap(libSend);

export default tracer;
