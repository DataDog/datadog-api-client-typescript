import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the SLO status resource.
 */
export type SloStatusType = typeof SLO_STATUS | UnparsedObject;
export const SLO_STATUS = "slo_status";
