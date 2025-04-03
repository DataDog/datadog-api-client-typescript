import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Action that will trigger a monitor notification if the downtime is in the `notify_end_types` state.
 */
export type DowntimeNotifyEndStateActions =
  | typeof CANCELED
  | typeof EXPIRED
  | UnparsedObject;
export const CANCELED = "canceled";
export const EXPIRED = "expired";
