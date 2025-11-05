/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineConfigProcessorGroup } from "./ObservabilityPipelineConfigProcessorGroup";
import { ObservabilityPipelineConfigProcessorItem } from "./ObservabilityPipelineConfigProcessorItem";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A list of processors that transform or enrich log data, or a list of grouped processor configurations.
 */

export type ObservabilityPipelineConfigProcessors =
  | Array<ObservabilityPipelineConfigProcessorItem>
  | Array<ObservabilityPipelineConfigProcessorGroup>
  | UnparsedObject;
