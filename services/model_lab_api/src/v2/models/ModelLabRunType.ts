import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for a Model Lab run resource.
 */
export type ModelLabRunType = typeof RUNS | UnparsedObject;
export const RUNS = "runs";
