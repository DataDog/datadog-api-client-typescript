import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type identifier for a scalar analytics response.
 */
export type ProductAnalyticsScalarResponseType =
  | typeof SCALAR_RESPONSE
  | UnparsedObject;
export const SCALAR_RESPONSE = "scalar_response";
