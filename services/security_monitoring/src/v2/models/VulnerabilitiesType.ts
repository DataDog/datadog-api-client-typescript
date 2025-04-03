import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type.
 */
export type VulnerabilitiesType = typeof VULNERABILITIES | UnparsedObject;
export const VULNERABILITIES = "vulnerabilities";
