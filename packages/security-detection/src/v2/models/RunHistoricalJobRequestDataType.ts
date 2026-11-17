import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of data.
 */
export type RunHistoricalJobRequestDataType =
  | typeof HISTORICALDETECTIONSJOBCREATE
  | UnparsedObject;
export const HISTORICALDETECTIONSJOBCREATE = "historicalDetectionsJobCreate";
