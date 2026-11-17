import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Stable error code. `permission_denied` indicates the item was rejected by queue access rules.
 */
export type LLMObsAnnotationErrorCode =
  | typeof PERMISSION_DENIED
  | UnparsedObject;
export const PERMISSION_DENIED = "permission_denied";
