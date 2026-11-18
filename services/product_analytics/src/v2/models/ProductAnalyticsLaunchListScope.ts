import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Scope of a launch list. `liftoffs` leaves out launches in the `plan` phase.
 */
export type ProductAnalyticsLaunchListScope = typeof LIFTOFFS | UnparsedObject;
export const LIFTOFFS = "liftoffs";
