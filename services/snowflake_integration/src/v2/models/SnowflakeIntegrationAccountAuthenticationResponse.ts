import { UnparsedObject } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountPrivateKeyAuthResponse } from "./SnowflakeIntegrationAccountPrivateKeyAuthResponse";

/**
 * Authentication configured on the Snowflake integration account.
 */
export type SnowflakeIntegrationAccountAuthenticationResponse =
  | SnowflakeIntegrationAccountPrivateKeyAuthResponse
  | UnparsedObject;
