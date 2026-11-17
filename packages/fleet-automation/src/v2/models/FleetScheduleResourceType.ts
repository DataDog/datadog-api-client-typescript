import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of schedule resource.
 */
export type FleetScheduleResourceType = typeof SCHEDULE | UnparsedObject;
export const SCHEDULE = "schedule";
