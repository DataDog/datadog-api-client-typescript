import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Splunk HTTP Event Collector (HEC) destination.
 */
export type CustomDestinationResponseForwardDestinationSplunkType =
  | typeof SPLUNK_HEC
  | UnparsedObject;
export const SPLUNK_HEC = "splunk_hec";
