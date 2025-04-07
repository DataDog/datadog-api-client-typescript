/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDatadogAgentSource } from "./ObservabilityPipelineDatadogAgentSource";
import { ObservabilityPipelineKafkaSource } from "./ObservabilityPipelineKafkaSource";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A data source for the pipeline.
 */

export type ObservabilityPipelineConfigSourceItem =
  | ObservabilityPipelineKafkaSource
  | ObservabilityPipelineDatadogAgentSource
  | UnparsedObject;
