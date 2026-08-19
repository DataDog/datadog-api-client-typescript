import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `execution_policy`.
 */
export type ExecutionPolicyType = typeof EXECUTION_POLICY | UnparsedObject;
export const EXECUTION_POLICY = "execution_policy";
