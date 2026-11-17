import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Widget request type.
 */
export type FunnelRequestType = typeof FUNNEL | UnparsedObject;
export const FUNNEL = "funnel";
