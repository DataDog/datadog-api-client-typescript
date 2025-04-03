import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * SLO correction resource type.
 */
export type SLOCorrectionType = typeof CORRECTION | UnparsedObject;
export const CORRECTION = "correction";
