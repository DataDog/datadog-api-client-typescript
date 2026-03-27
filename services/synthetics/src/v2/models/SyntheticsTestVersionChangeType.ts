import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the version metadata resource.
 */
export type SyntheticsTestVersionChangeType =
  | typeof VERSION_METADATA
  | UnparsedObject;
export const VERSION_METADATA = "version_metadata";
