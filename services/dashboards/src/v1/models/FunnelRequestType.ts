import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Widget request type.
 */
export type FunnelRequestType = typeof FUNNEL | UnparsedObject;
export const FUNNEL = "funnel";
