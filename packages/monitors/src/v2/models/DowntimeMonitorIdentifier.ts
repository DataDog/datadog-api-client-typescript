import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { DowntimeMonitorIdentifierId } from "./DowntimeMonitorIdentifierId";
import { DowntimeMonitorIdentifierTags } from "./DowntimeMonitorIdentifierTags";

/**
 * Monitor identifier for the downtime.
 */
export type DowntimeMonitorIdentifier =
  | DowntimeMonitorIdentifierId
  | DowntimeMonitorIdentifierTags
  | UnparsedObject;
