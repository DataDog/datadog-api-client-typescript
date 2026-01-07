import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of Product Analytics event. Must be `server` for server-side events.
 */
export type ProductAnalyticsServerSideEventItemType =
  | typeof SERVER
  | UnparsedObject;
export const SERVER = "server";
