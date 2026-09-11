import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The authentication method type.
 */
export type IntegrationAccountPrivateActionRunnerAuthType =
  | typeof PRIVATE_ACTION_RUNNER
  | UnparsedObject;
export const PRIVATE_ACTION_RUNNER = "private-action-runner";
