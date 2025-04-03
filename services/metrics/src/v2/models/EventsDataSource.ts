import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A data source that is powered by the Events Platform.
 */
export type EventsDataSource = typeof LOGS | typeof RUM | UnparsedObject;
export const LOGS = "logs";
export const RUM = "rum";
