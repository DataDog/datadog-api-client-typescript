import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `policy_result`.
 */
export type PolicyResultType = typeof POLICY_RESULT | UnparsedObject;
export const POLICY_RESULT = "policy_result";
