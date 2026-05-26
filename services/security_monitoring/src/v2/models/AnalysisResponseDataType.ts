import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Analysis response resource type.
 */
export type AnalysisResponseDataType = typeof SERVER_REQUEST | UnparsedObject;
export const SERVER_REQUEST = "server_request";
