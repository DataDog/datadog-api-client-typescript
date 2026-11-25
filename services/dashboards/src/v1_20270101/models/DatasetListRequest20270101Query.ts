import { UnparsedObject } from "@datadog/datadog-api-client";

import { DatasetListQuery } from "./DatasetListQuery";
import { RelationalDataQuery } from "./RelationalDataQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type DatasetListRequest20270101Query =
  | DatasetListQuery
  | RelationalDataQuery
  | UnparsedObject;
