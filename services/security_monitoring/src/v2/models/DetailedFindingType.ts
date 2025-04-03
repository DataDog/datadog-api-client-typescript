import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for findings that have the message and resource configuration.
 */
export type DetailedFindingType = typeof DETAILED_FINDING | UnparsedObject;
export const DETAILED_FINDING = "detailed_finding";
