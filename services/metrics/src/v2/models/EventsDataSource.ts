import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A data source that is powered by the Events Platform.
 */
export type EventsDataSource =
  | typeof LOGS
  | typeof RUM
  | typeof DORA
  | UnparsedObject;
export const LOGS = "logs";
export const RUM = "rum";
export const DORA = "dora";
