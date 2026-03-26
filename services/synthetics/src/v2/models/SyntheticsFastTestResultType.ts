import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for a fast test result.
 */
export type SyntheticsFastTestResultType = typeof RESULT | UnparsedObject;
export const RESULT = "result";
