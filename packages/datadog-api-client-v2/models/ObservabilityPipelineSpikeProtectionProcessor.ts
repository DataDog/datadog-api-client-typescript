/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSpikeProtectionProcessorActionWhenMissingPartitions } from "./ObservabilityPipelineSpikeProtectionProcessorActionWhenMissingPartitions";
import { ObservabilityPipelineSpikeProtectionProcessorSpikeAction } from "./ObservabilityPipelineSpikeProtectionProcessorSpikeAction";
import { ObservabilityPipelineSpikeProtectionProcessorThresholdOverride } from "./ObservabilityPipelineSpikeProtectionProcessorThresholdOverride";
import { ObservabilityPipelineSpikeProtectionProcessorType } from "./ObservabilityPipelineSpikeProtectionProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The `spike_protection` processor learns the normal ingestion volume for the logs that match a specified filter and takes action when the volume spikes unexpectedly.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineSpikeProtectionProcessor {
  /**
   * How to handle logs that are missing one of the `partition_fields`. Options:
   * - `ignore`: Forward the event without applying spike protection.
   * - `default_bucket`: Assign the event to a default partition.
   */
  "actionWhenMissingPartitions"?: ObservabilityPipelineSpikeProtectionProcessorActionWhenMissingPartitions;
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Indicates whether the processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * The minimum volume, in bytes, that must be observed within 24 hours before spike protection can activate. Defaults to 100 GiB.
   */
  "minimalThreshold"?: number;
  /**
   * A list of per-partition overrides for the minimal threshold, identified by matching field values. Requires `partition_fields` to be set.
   */
  "minimalThresholdOverrides"?: Array<ObservabilityPipelineSpikeProtectionProcessorThresholdOverride>;
  /**
   * Name of the spike protection rule.
   */
  "name": string;
  /**
   * A list of fields used to segment log traffic. Volume is learned and evaluated independently for each unique combination of these field values. A maximum of five fields is supported.
   */
  "partitionFields"?: Array<string>;
  /**
   * The action to take with matching logs while spike protection is active. Options:
   * - `drop`: Drop the event.
   * - `no_action`: Let the event pass through.
   * - `overflow_routing`: Route to an overflow destination.
   *
   * When `overflow_routing` is used, there must be a destination whose `inputs` reference this processor with the `<processor-id>.overflow_events` suffix to route the overflowing events.
   */
  "spikeAction": ObservabilityPipelineSpikeProtectionProcessorSpikeAction;
  /**
   * The number of standard deviations above the learned mean volume that must be exceeded before a spike is detected. Defaults to `5`.
   */
  "spikeThreshold"?: number;
  /**
   * The processor type. The value should always be `spike_protection`.
   */
  "type": ObservabilityPipelineSpikeProtectionProcessorType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    actionWhenMissingPartitions: {
      baseName: "action_when_missing_partitions",
      type: "ObservabilityPipelineSpikeProtectionProcessorActionWhenMissingPartitions",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    minimalThreshold: {
      baseName: "minimal_threshold",
      type: "number",
      format: "int64",
    },
    minimalThresholdOverrides: {
      baseName: "minimal_threshold_overrides",
      type: "Array<ObservabilityPipelineSpikeProtectionProcessorThresholdOverride>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    partitionFields: {
      baseName: "partition_fields",
      type: "Array<string>",
    },
    spikeAction: {
      baseName: "spike_action",
      type: "ObservabilityPipelineSpikeProtectionProcessorSpikeAction",
      required: true,
    },
    spikeThreshold: {
      baseName: "spike_threshold",
      type: "number",
      format: "double",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSpikeProtectionProcessorType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineSpikeProtectionProcessor.attributeTypeMap;
  }

  public constructor() {}
}
