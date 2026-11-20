import { UnparsedObject } from "@datadog/datadog-api-client";

import { AggregateAugmentedQuery } from "./AggregateAugmentedQuery";
import { DatasetListQuery } from "./DatasetListQuery";
import { EventsPlatformDataProjectionQueryDefinition } from "./EventsPlatformDataProjectionQueryDefinition";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type DataProjectionQuery =
  | AggregateAugmentedQuery
  | EventsPlatformDataProjectionQueryDefinition
  | DatasetListQuery
  | UnparsedObject;
