import { UnparsedObject } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountPrivateKeyAuthRequest } from "./SnowflakeIntegrationAccountPrivateKeyAuthRequest";

/**
 * Authentication for creating the Snowflake integration account. Exactly one method is set.
 */
export type SnowflakeIntegrationAccountAuthenticationRequest =
  | SnowflakeIntegrationAccountPrivateKeyAuthRequest
  | UnparsedObject;
