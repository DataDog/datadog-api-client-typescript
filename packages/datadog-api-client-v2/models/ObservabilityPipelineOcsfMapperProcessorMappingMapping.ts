/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineOcsfMappingLibrary } from "./ObservabilityPipelineOcsfMappingLibrary";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Defines a single mapping rule for transforming logs into the OCSF schema.
 */

export type ObservabilityPipelineOcsfMapperProcessorMappingMapping =
  | ObservabilityPipelineOcsfMappingLibrary
  | UnparsedObject;
