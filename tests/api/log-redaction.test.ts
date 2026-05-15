import { IsomorphicFetchHttpLibrary } from "../../packages/datadog-api-client-common/http/isomorphic-fetch";
import {
  HttpMethod,
  RequestContext,
} from "../../packages/datadog-api-client-common/http/http";
import { logger } from "../../logger";

// TestLogRequestRedactsAuthorization verifies that when debug logging is on,
// the IsomorphicFetchHttpLibrary masks the Authorization header (Bearer
// tokens — delegated tokens, PATs) before sending the request log line to
// the logger. Without this, callers running with debug logging and access-
// token auth leak the bearer to stderr / CI artifacts / log shippers.
// See CRED-2625.
test("logRequest masks Authorization Bearer token", () => {
  const debugMessages: string[] = [];
  const originalDebug = logger.debug.bind(logger);
  logger.debug = (...args: unknown[]) => {
    debugMessages.push(args.map(String).join(""));
  };

  try {
    const http = new IsomorphicFetchHttpLibrary();
    http.debug = true;

    const ctx = new RequestContext("https://api.example.com/ping", HttpMethod.GET);
    ctx.setHeaderParam("DD-API-KEY", "api-key-secret-value");
    ctx.setHeaderParam("DD-APPLICATION-KEY", "app-key-secret-value");
    ctx.setHeaderParam("Authorization", "Bearer ddpat_supersecret_should_not_leak");

    // logRequest is private; exercise it indirectly by reaching through the
    // class. Acceptable in a test file since the redaction surface is what
    // we're asserting on, not the public send() pipeline.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (http as any).logRequest(ctx);

    const joined = debugMessages.join("\n");
    expect(joined).not.toContain("api-key-secret-value");
    expect(joined).not.toContain("app-key-secret-value");
    expect(joined).not.toContain("ddpat_supersecret_should_not_leak");
    // Each redacted value is replaced with `x` repeated to its original length.
    expect(joined).toMatch(/DD-API-KEY":\s*"x+"/);
    expect(joined).toMatch(/DD-APPLICATION-KEY":\s*"x+"/);
    expect(joined).toMatch(/Authorization":\s*"x+"/);
  } finally {
    logger.debug = originalDebug;
  }
});
