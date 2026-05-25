import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Get node types response resource type.
 */
export type NodeTypesResponseDataType =
  | typeof GET_NODE_TYPES_RESPONSE
  | UnparsedObject;
export const GET_NODE_TYPES_RESPONSE = "get_node_types_response";
