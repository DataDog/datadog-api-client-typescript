import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Collection health of a single dataflow.
 */
export type IntegrationAccountDataflowHealth =
  | typeof OK
  | typeof BROKEN
  | typeof UNKNOWN
  | UnparsedObject;
export const OK = "DATAFLOW_HEALTH_OK";
export const BROKEN = "DATAFLOW_HEALTH_BROKEN";
export const UNKNOWN = "DATAFLOW_HEALTH_UNKNOWN";
