import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Denotes whether mapping keys were available for this endpoint.
 */
export type BillingDimensionsMappingBodyItemAttributesEndpointsItemsStatus =
  | typeof OK
  | typeof NOT_FOUND
  | UnparsedObject;
export const OK = "OK";
export const NOT_FOUND = "NOT_FOUND";
