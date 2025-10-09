import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type for creating reference table data. Only these source types can be created through this API.
 */
export type ReferenceTableCreateSourceType =
  | typeof LOCAL_FILE
  | typeof S3
  | typeof GCS
  | typeof AZURE
  | UnparsedObject;
export const LOCAL_FILE = "LOCAL_FILE";
export const S3 = "S3";
export const GCS = "GCS";
export const AZURE = "AZURE";
