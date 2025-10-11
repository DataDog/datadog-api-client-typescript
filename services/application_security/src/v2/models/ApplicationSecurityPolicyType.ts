import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `policy`.
 */
export type ApplicationSecurityPolicyType = typeof POLICY | UnparsedObject;
export const POLICY = "policy";
