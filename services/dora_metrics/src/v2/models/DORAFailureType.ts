import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for DORA failure events.
 */
export type DORAFailureType = typeof DORA_FAILURE | UnparsedObject;
export const DORA_FAILURE = "dora_failure";
