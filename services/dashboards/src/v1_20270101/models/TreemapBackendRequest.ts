import { UnparsedObject } from "@datadog/datadog-api-client";

import { TreemapBackendRequest20270101OneOf } from "./TreemapBackendRequest20270101OneOf";
import { TreemapBackendRequest20270101OneOf4463750144 } from "./TreemapBackendRequest20270101OneOf4463750144";
import { TreemapBackendRequest20270101OneOf4463751424 } from "./TreemapBackendRequest20270101OneOf4463751424";
import { TreemapBackendRequest20270101OneOf4463752384 } from "./TreemapBackendRequest20270101OneOf4463752384";
import { TreemapBackendRequest20270101OneOf4463753824 } from "./TreemapBackendRequest20270101OneOf4463753824";

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
