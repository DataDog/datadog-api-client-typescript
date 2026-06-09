import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Case link resource type.
 */
export type IncidentCaseLinkType = typeof CASE_LINK | UnparsedObject;
export const CASE_LINK = "case_link";
