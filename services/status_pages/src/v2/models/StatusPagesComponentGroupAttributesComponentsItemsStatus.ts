import { UnparsedObject } from "@datadog/datadog-api-client";
export type StatusPagesComponentGroupAttributesComponentsItemsStatus =
  | typeof OPERATIONAL
  | typeof DEGRADED
  | typeof PARTIAL_OUTAGE
  | typeof MAJOR_OUTAGE
  | UnparsedObject;
export const OPERATIONAL = "operational";
export const DEGRADED = "degraded";
export const PARTIAL_OUTAGE = "partial_outage";
export const MAJOR_OUTAGE = "major_outage";
