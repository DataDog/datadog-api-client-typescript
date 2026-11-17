import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep } from "./ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep";
import { ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytes } from "./ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytes";

/**
 * The minimal threshold to apply to the matching partition.
 */
export type ObservabilityPipelineSpikeProtectionProcessorMinimalThreshold =
  | ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdBytes
  | ObservabilityPipelineSpikeProtectionProcessorMinimalThresholdAlwaysKeep
  | UnparsedObject;
