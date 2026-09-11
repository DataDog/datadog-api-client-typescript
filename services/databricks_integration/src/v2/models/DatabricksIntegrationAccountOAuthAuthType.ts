import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication method type.
 */
export type DatabricksIntegrationAccountOAuthAuthType =
  | typeof DATABRICKS_OAUTH
  | UnparsedObject;
export const DATABRICKS_OAUTH = "databricks-oauth";
