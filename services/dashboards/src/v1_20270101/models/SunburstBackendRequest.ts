import { UnparsedObject } from "@datadog/datadog-api-client";

import { SunburstBackendRequest20270101OneOf } from "./SunburstBackendRequest20270101OneOf";
import { SunburstBackendRequest20270101OneOf4462422560 } from "./SunburstBackendRequest20270101OneOf4462422560";
import { SunburstBackendRequest20270101OneOf4462423840 } from "./SunburstBackendRequest20270101OneOf4462423840";
import { SunburstBackendRequest20270101OneOf4462424800 } from "./SunburstBackendRequest20270101OneOf4462424800";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SunburstBackendRequest =
  | SunburstBackendRequest20270101OneOf
  | SunburstBackendRequest20270101OneOf4462422560
  | SunburstBackendRequest20270101OneOf4462423840
  | SunburstBackendRequest20270101OneOf4462424800
  | UnparsedObject;
