import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type for reference table data. Includes all possible source types that can appear in responses.
 */
export type ReferenceTableSourceType =
  | typeof LOCAL_FILE
  | typeof S3
  | typeof GCS
  | typeof AZURE
  | typeof SERVICENOW
  | typeof SALESFORCE
  | typeof DATABRICKS
  | typeof SNOWFLAKE
  | UnparsedObject;
export const LOCAL_FILE = "LOCAL_FILE";
export const S3 = "S3";
export const GCS = "GCS";
export const AZURE = "AZURE";
export const SERVICENOW = "SERVICENOW";
export const SALESFORCE = "SALESFORCE";
export const DATABRICKS = "DATABRICKS";
export const SNOWFLAKE = "SNOWFLAKE";
