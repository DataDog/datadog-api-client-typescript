/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HostmapDataProjectionRequest } from "./HostmapDataProjectionRequest";
import { HostmapInfrastructureRequest } from "./HostmapInfrastructureRequest";
import { MetricHostmapRequests } from "./MetricHostmapRequests";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type HostmapBackendDefinition20270101Requests =
  | MetricHostmapRequests
  | HostmapInfrastructureRequest
  | HostmapDataProjectionRequest
  | UnparsedObject;
