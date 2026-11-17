import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of payload.
 */
export type ConvertJobResultsToSignalsDataType =
  | typeof HISTORICALDETECTIONSJOBRESULTSIGNALCONVERSION
  | UnparsedObject;
export const HISTORICALDETECTIONSJOBRESULTSIGNALCONVERSION =
  "historicalDetectionsJobResultSignalConversion";
