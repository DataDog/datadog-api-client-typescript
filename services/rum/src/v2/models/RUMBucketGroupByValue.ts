import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The value of a group-by facet for this bucket. A string for string facets, a number for numeric facets and histograms.
 */
export type RUMBucketGroupByValue = string | number | UnparsedObject;
