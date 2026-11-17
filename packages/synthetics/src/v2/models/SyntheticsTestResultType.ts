import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the Synthetic test result resource, `result`.
 */
export type SyntheticsTestResultType = typeof RESULT | UnparsedObject;
export const RESULT = "result";
