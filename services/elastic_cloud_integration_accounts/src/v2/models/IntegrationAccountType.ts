import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for an integration account. Always `integration-account`.
 */
export type IntegrationAccountType =
  | typeof INTEGRATION_ACCOUNT
  | UnparsedObject;
export const INTEGRATION_ACCOUNT = "integration-account";
