import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type, always set to `dataset`.
 */
export type DatasetType = typeof DATASET | UnparsedObject;
export const DATASET = "dataset";
