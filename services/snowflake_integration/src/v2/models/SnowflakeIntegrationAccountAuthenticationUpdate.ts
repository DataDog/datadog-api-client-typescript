import { UnparsedObject } from "@datadog/datadog-api-client";

import { SnowflakeIntegrationAccountPrivateKeyAuthUpdate } from "./SnowflakeIntegrationAccountPrivateKeyAuthUpdate";

/**
 * Authentication for updating the Snowflake integration account. Exactly one method is set.
 */
export type SnowflakeIntegrationAccountAuthenticationUpdate =
  | SnowflakeIntegrationAccountPrivateKeyAuthUpdate
  | UnparsedObject;
