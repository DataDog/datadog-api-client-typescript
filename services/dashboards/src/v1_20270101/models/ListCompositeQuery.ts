import { UnparsedObject } from "@datadog/datadog-api-client";

import { ListAugmentedQuery } from "./ListAugmentedQuery";
import { ListFilteredQuery } from "./ListFilteredQuery";
import { ListSegmentQuery } from "./ListSegmentQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ListCompositeQuery =
  | ListFilteredQuery
  | ListAugmentedQuery
  | ListSegmentQuery
  | UnparsedObject;
