/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep } from "./ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep";
import { ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytes } from "./ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The minimal threshold to apply to the matching partition.
 */

export type ObservabilityPipelineSpikeProtectionProcessorMinimalThreshold =
  | ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytes
  | ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep
  | UnparsedObject;
