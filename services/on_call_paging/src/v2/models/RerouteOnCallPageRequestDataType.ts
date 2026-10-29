import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource used when rerouting an On-Call Page.
 */
export type RerouteOnCallPageRequestDataType = typeof REROUTE | UnparsedObject;
export const REROUTE = "reroute";
