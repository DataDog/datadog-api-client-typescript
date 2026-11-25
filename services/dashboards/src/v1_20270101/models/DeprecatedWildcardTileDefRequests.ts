import { UnparsedObject } from "@datadog/datadog-api-client";

import { DDSQLTableRequest } from "./DDSQLTableRequest";
import { DDSQLTimeseriesRequest } from "./DDSQLTimeseriesRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type DeprecatedWildcardTileDefRequests =
  | DDSQLTableRequest
  | DDSQLTimeseriesRequest
  | UnparsedObject;
