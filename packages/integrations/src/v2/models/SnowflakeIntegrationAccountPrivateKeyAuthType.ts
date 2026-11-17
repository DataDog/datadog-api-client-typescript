import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The authentication method type.
 */
export type SnowflakeIntegrationAccountPrivateKeyAuthType =
  | typeof SNOWFLAKE_PRIVATE_KEY
  | UnparsedObject;
export const SNOWFLAKE_PRIVATE_KEY = "snowflake_private_key";
