import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * ECS deployment state, populated only for deployment failures.
 */
export type RemediationDeploymentRolloutState =
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | typeof FAILED
  | UnparsedObject;
export const IN_PROGRESS = "IN_PROGRESS";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
