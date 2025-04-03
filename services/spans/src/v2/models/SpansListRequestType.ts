import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource. The value should always be search_request.
 */
export type SpansListRequestType = typeof SEARCH_REQUEST | UnparsedObject;
export const SEARCH_REQUEST = "search_request";
