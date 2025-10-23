import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of file operation to perform on the target configuration file.
 * - `merge-patch`: Merges the provided patch data with the existing configuration file.
 *   Creates the file if it doesn't exist.
 * - `delete`: Removes the specified configuration file from the target hosts.
 */
export type FleetDeploymentFileOp =
  | typeof MERGE_PATCH
  | typeof DELETE
  | UnparsedObject;
export const MERGE_PATCH = "merge-patch";
export const DELETE = "delete";
