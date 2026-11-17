import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of payload.
 */
export type HistoricalJobDataType =
  | typeof HISTORICALDETECTIONSJOB
  | UnparsedObject;
export const HISTORICALDETECTIONSJOB = "historicalDetectionsJob";
