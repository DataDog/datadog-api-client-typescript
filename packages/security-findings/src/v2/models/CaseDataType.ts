import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Cases resource type.
 */
export type CaseDataType = typeof CASES | UnparsedObject;
export const CASES = "cases";
