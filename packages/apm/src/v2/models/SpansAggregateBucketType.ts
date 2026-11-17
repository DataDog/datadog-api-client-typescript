import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The spans aggregate bucket type.
 */
export type SpansAggregateBucketType = typeof BUCKET | UnparsedObject;
export const BUCKET = "bucket";
