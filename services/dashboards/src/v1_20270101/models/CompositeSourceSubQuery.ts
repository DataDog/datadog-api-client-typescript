import { UnparsedObject } from "@datadog/datadog-api-client";

import { CompositeAudienceFiltersQuery } from "./CompositeAudienceFiltersQuery";
import { CompositeEventsPlatformSubQueryDefinition } from "./CompositeEventsPlatformSubQueryDefinition";
import { CompositeReferentialDataQuery } from "./CompositeReferentialDataQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CompositeSourceSubQuery =
  | CompositeEventsPlatformSubQueryDefinition
  | CompositeReferentialDataQuery
  | CompositeAudienceFiltersQuery
  | UnparsedObject;
