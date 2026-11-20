/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApmMetricsQueryFragment } from "./ApmMetricsQueryFragment";
import { EventsQueryFragmentDefinition } from "./EventsQueryFragmentDefinition";
import { MetricsLikeQueryFragmentCloudCost } from "./MetricsLikeQueryFragmentCloudCost";
import { MetricsLikeQueryFragmentMetrics } from "./MetricsLikeQueryFragmentMetrics";
import { PublishedAnalysisQueryFragment } from "./PublishedAnalysisQueryFragment";
import { ReferentialQueryFragmentManagedResource } from "./ReferentialQueryFragmentManagedResource";
import { ReferentialQueryFragmentReferenceTable } from "./ReferentialQueryFragmentReferenceTable";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
