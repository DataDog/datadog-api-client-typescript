import { UnparsedObject } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountPrivateKeyAuthRequest } from "./SnowflakeIntegrationAccountPrivateKeyAuthRequest";

/**
 * Authentication for updating the Snowflake integration account. Exactly one method is set. An update replaces the authentication object entirely, so it requires the same fields as creating an account.
 */
export type SnowflakeIntegrationAccountAuthenticationUpdate =
  | SnowflakeIntegrationAccountPrivateKeyAuthRequest
  | UnparsedObject;
