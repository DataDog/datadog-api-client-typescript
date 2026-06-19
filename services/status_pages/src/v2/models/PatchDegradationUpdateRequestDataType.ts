import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Degradation updates resource type.
 */
export type PatchDegradationUpdateRequestDataType =
  | typeof DEGRADATION_UPDATES
  | UnparsedObject;
export const DEGRADATION_UPDATES = "degradation_updates";
