import { UnparsedObject } from "@datadog/datadog-api-client";

import { GeomapBackendPointsRequest } from "./GeomapBackendPointsRequest";
import { GeomapBackendRegionsRequest } from "./GeomapBackendRegionsRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type GeomapBackendRequest =
  | GeomapBackendRegionsRequest
  | GeomapBackendPointsRequest
  | UnparsedObject;
