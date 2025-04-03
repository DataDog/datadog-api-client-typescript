import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source from which to query items to display in the funnel.
 */
export type FunnelSource = typeof RUM | UnparsedObject;
export const RUM = "rum";
