import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The SIEM pricing model (SKU) for the organization
 */
export type SecurityMonitoringSKU =
  | typeof PER_GB_ANALYZED
  | typeof PER_EVENT_IN_SIEM_INDEX_2023
  | typeof ADD_ON_2024
  | UnparsedObject;
export const PER_GB_ANALYZED = "per_gb_analyzed";
export const PER_EVENT_IN_SIEM_INDEX_2023 = "per_event_in_siem_index_2023";
export const ADD_ON_2024 = "add_on_2024";
