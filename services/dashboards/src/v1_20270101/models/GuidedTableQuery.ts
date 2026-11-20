import { UnparsedObject } from "@datadog/datadog-api-client";

import { ApmMetricsQueryFragment } from "./ApmMetricsQueryFragment";
import { EventsQueryFragmentDefinition } from "./EventsQueryFragmentDefinition";
import { MetricsLikeQueryFragmentCloudCost } from "./MetricsLikeQueryFragmentCloudCost";
import { MetricsLikeQueryFragmentMetrics } from "./MetricsLikeQueryFragmentMetrics";
import { PublishedAnalysisQueryFragment } from "./PublishedAnalysisQueryFragment";
import { ReferentialQueryFragmentManagedResource } from "./ReferentialQueryFragmentManagedResource";
import { ReferentialQueryFragmentReferenceTable } from "./ReferentialQueryFragmentReferenceTable";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type GuidedTableQuery =
  | MetricsLikeQueryFragmentMetrics
  | MetricsLikeQueryFragmentCloudCost
  | EventsQueryFragmentDefinition
  | ReferentialQueryFragmentReferenceTable
  | ReferentialQueryFragmentManagedResource
  | PublishedAnalysisQueryFragment
  | ApmMetricsQueryFragment
  | UnparsedObject;
