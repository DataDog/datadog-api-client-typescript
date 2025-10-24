import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of data.
 */
export type RunThreatHuntingJobRequestDataType =
  | typeof HISTORICALDETECTIONSJOBCREATE
  | UnparsedObject;
export const HISTORICALDETECTIONSJOBCREATE = "historicalDetectionsJobCreate";
