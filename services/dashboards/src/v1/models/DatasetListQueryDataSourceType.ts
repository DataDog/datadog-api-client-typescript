import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifies this as a published-dataset list query.
 */
export type DatasetListQueryDataSourceType = typeof DATASET | UnparsedObject;
export const DATASET = "dataset";
