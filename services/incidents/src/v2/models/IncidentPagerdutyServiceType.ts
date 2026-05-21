import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * PagerDuty service resource type.
 */
export type IncidentPagerdutyServiceType =
  | typeof PAGERDUTY_SERVICE
  | UnparsedObject;
export const PAGERDUTY_SERVICE = "pagerduty_service";
