import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { DowntimeMonitorIncludedItem } from "./DowntimeMonitorIncludedItem";
import { User } from "./User";

/**
 * An object related to a downtime.
 */
export type DowntimeResponseIncludedItem =
  | User
  | DowntimeMonitorIncludedItem
  | UnparsedObject;
