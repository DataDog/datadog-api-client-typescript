import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the integration account resource. Always `integration-account`.
 */
export type IntegrationAccountType =
  | typeof INTEGRATION_ACCOUNT
  | UnparsedObject;
export const INTEGRATION_ACCOUNT = "integration-account";
