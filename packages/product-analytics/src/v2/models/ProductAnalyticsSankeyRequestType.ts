import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type identifier for a Sankey request.
 */
export type ProductAnalyticsSankeyRequestType =
  | typeof SANKEY_REQUEST
  | UnparsedObject;
export const SANKEY_REQUEST = "sankey_request";
