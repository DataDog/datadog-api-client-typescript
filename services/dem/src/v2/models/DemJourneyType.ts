import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for DEM journeys.
 */
export type DemJourneyType = typeof JOURNEYS | UnparsedObject;
export const JOURNEYS = "journeys";
