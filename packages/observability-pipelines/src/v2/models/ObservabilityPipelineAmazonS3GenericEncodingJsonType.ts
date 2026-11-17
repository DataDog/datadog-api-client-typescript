import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The encoding type. Always `json`.
 */
export type ObservabilityPipelineAmazonS3GenericEncodingJsonType =
  | typeof JSON
  | UnparsedObject;
export const JSON = "json";
