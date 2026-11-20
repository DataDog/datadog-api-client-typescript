/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatmapBackendRequest20270101OneOf } from "./HeatmapBackendRequest20270101OneOf";
import { HeatmapBackendRequest20270101OneOf4458138496 } from "./HeatmapBackendRequest20270101OneOf4458138496";
import { HeatmapBackendRequest20270101OneOf4458139936 } from "./HeatmapBackendRequest20270101OneOf4458139936";
import { HeatmapBackendRequest20270101OneOf4458140576 } from "./HeatmapBackendRequest20270101OneOf4458140576";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type HeatmapBackendRequest =
  | HeatmapBackendRequest20270101OneOf
  | HeatmapBackendRequest20270101OneOf4458138496
  | HeatmapBackendRequest20270101OneOf4458139936
  | HeatmapBackendRequest20270101OneOf4458140576
  | UnparsedObject;
