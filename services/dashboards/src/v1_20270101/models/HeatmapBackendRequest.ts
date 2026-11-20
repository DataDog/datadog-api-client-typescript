import { UnparsedObject } from "@datadog/datadog-api-client";

import { HeatmapBackendRequest20270101OneOf } from "./HeatmapBackendRequest20270101OneOf";
import { HeatmapBackendRequest20270101OneOf4458138496 } from "./HeatmapBackendRequest20270101OneOf4458138496";
import { HeatmapBackendRequest20270101OneOf4458139936 } from "./HeatmapBackendRequest20270101OneOf4458139936";
import { HeatmapBackendRequest20270101OneOf4458140576 } from "./HeatmapBackendRequest20270101OneOf4458140576";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HeatmapBackendRequest =
  | HeatmapBackendRequest20270101OneOf
  | HeatmapBackendRequest20270101OneOf4458138496
  | HeatmapBackendRequest20270101OneOf4458139936
  | HeatmapBackendRequest20270101OneOf4458140576
  | UnparsedObject;
