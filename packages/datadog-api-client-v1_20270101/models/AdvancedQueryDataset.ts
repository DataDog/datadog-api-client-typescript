/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ActionsDatastoreDataset } from "./ActionsDatastoreDataset";
import { AnalysisDataset } from "./AnalysisDataset";
import { BigQueryDataset } from "./BigQueryDataset";
import { EventPlatformDatasetDefinition } from "./EventPlatformDatasetDefinition";
import { FormulaDataset } from "./FormulaDataset";
import { HistoricalDiscoveredProcessesDataset } from "./HistoricalDiscoveredProcessesDataset";
import { MetricDatasetCloudCostScalar } from "./MetricDatasetCloudCostScalar";
import { MetricDatasetMetricScalar } from "./MetricDatasetMetricScalar";
import { ProductAnalyticsJourneyDataset } from "./ProductAnalyticsJourneyDataset";
import { PublishedAnalysis } from "./PublishedAnalysis";
import { ReferentialDatasetManagedResource } from "./ReferentialDatasetManagedResource";
import { ReferentialDatasetReferenceTable } from "./ReferentialDatasetReferenceTable";
import { SnowflakeQueryDataset } from "./SnowflakeQueryDataset";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type AdvancedQueryDataset =
  | EventPlatformDatasetDefinition
  | ReferentialDatasetReferenceTable
  | ReferentialDatasetManagedResource
  | ActionsDatastoreDataset
  | MetricDatasetCloudCostScalar
  | MetricDatasetMetricScalar
  | FormulaDataset
  | AnalysisDataset
  | PublishedAnalysis
  | SnowflakeQueryDataset
  | BigQueryDataset
  | ProductAnalyticsJourneyDataset
  | HistoricalDiscoveredProcessesDataset
  | UnparsedObject;
