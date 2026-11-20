import { UnparsedObject } from "@datadog/datadog-api-client";

import { HostmapDataProjectionRequest } from "./HostmapDataProjectionRequest";
import { HostmapInfrastructureRequest } from "./HostmapInfrastructureRequest";
import { MetricHostmapRequests } from "./MetricHostmapRequests";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HostmapBackendDefinition20270101Requests =
  | MetricHostmapRequests
  | HostmapInfrastructureRequest
  | HostmapDataProjectionRequest
  | UnparsedObject;
