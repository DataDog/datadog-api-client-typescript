import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of event.
 */
export type SecurityMonitoringSignalMetadataType =
  | typeof SIGNAL_METADATA
  | UnparsedObject;
export const SIGNAL_METADATA = "signal_metadata";
