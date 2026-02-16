import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the security issues. Can be "findings" or "vulnerabilities".
 */
export type IntegrationAssignmentDataAttributesRequestType =
  | typeof FINDINGS
  | typeof VULNERABILITIES
  | UnparsedObject;
export const FINDINGS = "findings";
export const VULNERABILITIES = "vulnerabilities";
