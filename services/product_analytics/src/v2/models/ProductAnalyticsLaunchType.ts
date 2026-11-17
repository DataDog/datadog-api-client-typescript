import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Launch resource type.
 */
export type ProductAnalyticsLaunchType = typeof LIFTOFF | UnparsedObject;
export const LIFTOFF = "liftoff";
