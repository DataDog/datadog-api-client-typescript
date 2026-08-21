import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a Sankey response.
 */
export type ProductAnalyticsSankeyResponseType =
  | typeof SANKEY_RESPONSE
  | UnparsedObject;
export const SANKEY_RESPONSE = "sankey_response";
