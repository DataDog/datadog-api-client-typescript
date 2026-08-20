import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a Sankey request.
 */
export type ProductAnalyticsSankeyRequestType =
  | typeof SANKEY_REQUEST
  | UnparsedObject;
export const SANKEY_REQUEST = "sankey_request";
