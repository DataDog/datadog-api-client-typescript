import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Cases resource type.
 */
export type CaseDataType = typeof CASES | UnparsedObject;
export const CASES = "cases";
