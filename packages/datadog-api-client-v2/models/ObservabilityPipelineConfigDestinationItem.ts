/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDatadogLogsDestination } from "./ObservabilityPipelineDatadogLogsDestination";
import { ObservabilityPipelineGoogleChronicleDestination } from "./ObservabilityPipelineGoogleChronicleDestination";
import { ObservabilityPipelineNewRelicDestination } from "./ObservabilityPipelineNewRelicDestination";
import { ObservabilityPipelineSentinelOneDestination } from "./ObservabilityPipelineSentinelOneDestination";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A destination for the pipeline.
 */

export type ObservabilityPipelineConfigDestinationItem =
  | ObservabilityPipelineDatadogLogsDestination
  | ObservabilityPipelineGoogleChronicleDestination
  | ObservabilityPipelineNewRelicDestination
  | ObservabilityPipelineSentinelOneDestination
  | UnparsedObject;
