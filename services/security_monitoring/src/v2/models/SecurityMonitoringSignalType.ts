import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of event.
 */
export type SecurityMonitoringSignalType = typeof SIGNAL | UnparsedObject;
export const SIGNAL = "signal";
