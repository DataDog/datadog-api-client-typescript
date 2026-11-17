import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Security findings resource type.
 */
export type FindingDataType = typeof FINDINGS | UnparsedObject;
export const FINDINGS = "findings";
