import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Degradations resource type.
 */
export type PatchDegradationRequestDataType =
  | typeof DEGRADATIONS
  | UnparsedObject;
export const DEGRADATIONS = "degradations";
