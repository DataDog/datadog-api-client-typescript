/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TreemapBackendRequest20270101OneOf } from "./TreemapBackendRequest20270101OneOf";
import { TreemapBackendRequest20270101OneOf4463750144 } from "./TreemapBackendRequest20270101OneOf4463750144";
import { TreemapBackendRequest20270101OneOf4463751424 } from "./TreemapBackendRequest20270101OneOf4463751424";
import { TreemapBackendRequest20270101OneOf4463752384 } from "./TreemapBackendRequest20270101OneOf4463752384";
import { TreemapBackendRequest20270101OneOf4463753824 } from "./TreemapBackendRequest20270101OneOf4463753824";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type TreemapBackendRequest =
  | TreemapBackendRequest20270101OneOf
  | TreemapBackendRequest20270101OneOf4463750144
  | TreemapBackendRequest20270101OneOf4463751424
  | TreemapBackendRequest20270101OneOf4463752384
  | TreemapBackendRequest20270101OneOf4463753824
  | UnparsedObject;
