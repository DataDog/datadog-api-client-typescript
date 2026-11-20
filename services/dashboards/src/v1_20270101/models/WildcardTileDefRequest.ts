import { UnparsedObject } from "@datadog/datadog-api-client";

import { DeprecatedWildcardTileDefRequests } from "./DeprecatedWildcardTileDefRequests";
import { TabularDataRequest } from "./TabularDataRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type WildcardTileDefRequest =
  | TabularDataRequest
  | DeprecatedWildcardTileDefRequests
  | UnparsedObject;
