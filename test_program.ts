/**
 * Test program to verify PAT authentication via the existing AuthZ/OAuth2 code path.
 *
 * Usage:
 *   DD_BEARER_TOKEN=ddpat_xxx npx ts-node test_program.ts
 *
 * Or set the PAT directly below.
 */
import {
  createConfiguration,
  BaseServerConfiguration,
  RequestContext,
  HttpMethod,
  applySecurityAuthentication,
} from "./packages/datadog-api-client/src";

const PAT = process.env.DD_BEARER_TOKEN || "ddpat_REPLACE_WITH_YOUR_PAT";

async function main() {
  // Use the EXISTING AuthZ (OAuth2 bearer) mechanism -- this was already
  // in the client before any PAT-specific changes.  AuthZ sets the
  // "Authorization: Bearer <token>" header, which is exactly what PAT needs.
  const baseServer = new BaseServerConfiguration("https://dd.datad0g.com", {});
  const configuration = createConfiguration({
    baseServer,
    authMethods: {
      AuthZ: { accessToken: PAT },
    },
    debug: true,
  });

  // Build the request the same way UsersApi.listUsers does:
  const requestContext = baseServer.makeRequestContext(
    "/api/v2/users?page[size]=2",
    HttpMethod.GET,
  );
  requestContext.setHeaderParam("Accept", "application/json");
  requestContext.setHttpConfig(configuration.httpConfig);

  applySecurityAuthentication(configuration, requestContext, [
    "apiKeyAuth",
    "appKeyAuth",
    "AuthZ",
  ]);

  const responseContext = await configuration.httpApi.send(requestContext);
  const statusCode = responseContext.httpStatusCode;
  const body = responseContext.body;
  const text = await body.text();

  console.log("Status:", statusCode);
  if (statusCode >= 200 && statusCode < 300) {
    console.log(
      "Response:",
      JSON.stringify(JSON.parse(text), null, 2).substring(0, 500),
    );
  } else {
    console.error("Error response:", text);
    process.exit(1);
  }
}

main();
