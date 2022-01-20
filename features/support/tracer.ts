import { tracer } from "dd-trace";

const v1 =
  require("../../packages/datadog-api-client-v1/http/isomorphic-fetch").IsomorphicFetchHttpLibrary;
const v1Send = v1.prototype.send;
const v2 =
  require("../../packages/datadog-api-client-v2/http/isomorphic-fetch").IsomorphicFetchHttpLibrary;
const v2Send = v2.prototype.send;

function wrap(method: any) {
  function send(request: any): any {
    return tracer.trace(
      "fetch",
      { type: "http", resource: request.getUrl() },
      (span: any, callback: () => void) => {
        const spanId = span.context().toSpanId();
        const traceId = span.context().toTraceId();
        request.setHeaderParam("x-datadog-parent-id", spanId);
        request.setHeaderParam("x-datadog-trace-id", traceId);
        // These headers are required to prevent the continuation of the trace from being dropped
        request.setHeaderParam("x-datadog-origin", "ciapp-test");
        request.setHeaderParam("x-datadog-sampling-priority", 1);
        request.setHeaderParam("x-datadog-sampled", 1);
        const response = method(request);

        response.promise = response.promise.then((responseContext: any) => {
          const violations = responseContext.headers["sl-violations"];
          if (violations != undefined) {
            span.addTags({
              "error.type": "validation",
              "error.msg": violations,
            });
          }
          callback()
          return responseContext;
        });
        return response;
      }
    );
  }
  return send;
}

v1.prototype.send = wrap(v1Send);
v2.prototype.send = wrap(v2Send);

export default tracer;
