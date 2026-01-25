import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of remediation action taken.
 */
export type DORADeploymentPatchRemediationType =
  | typeof ROLLBACK
  | typeof ROLLFORWARD
  | UnparsedObject;
export const ROLLBACK = "rollback";
export const ROLLFORWARD = "rollforward";
