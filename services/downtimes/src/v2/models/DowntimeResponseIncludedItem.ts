import { UnparsedObject } from "@datadog/datadog-api-client";

import { DowntimeMonitorIncludedItem } from "./DowntimeMonitorIncludedItem";
import { User } from "./User";

/**
 * An object related to a downtime.
 */
export type DowntimeResponseIncludedItem =
  | User
  | DowntimeMonitorIncludedItem
  | UnparsedObject;
