import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Related resource to add to `included`.
 */
export type RemediationGroupInclude = typeof CASE | UnparsedObject;
export const CASE = "case";
