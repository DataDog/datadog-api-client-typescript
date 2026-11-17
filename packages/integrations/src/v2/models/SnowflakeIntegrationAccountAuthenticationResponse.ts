import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { SnowflakeIntegrationAccountPrivateKeyAuthResponse } from "./SnowflakeIntegrationAccountPrivateKeyAuthResponse";

/**
 * Authentication configured on the Snowflake integration account.
 */
export type SnowflakeIntegrationAccountAuthenticationResponse =
  | SnowflakeIntegrationAccountPrivateKeyAuthResponse
  | UnparsedObject;
