import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineQuotaProcessorLimit } from "./ObservabilityPipelineQuotaProcessorLimit";
import { ObservabilityPipelineQuotaProcessorOverflowAction } from "./ObservabilityPipelineQuotaProcessorOverflowAction";
import { ObservabilityPipelineQuotaProcessorOverride } from "./ObservabilityPipelineQuotaProcessorOverride";
import { ObservabilityPipelineQuotaProcessorType } from "./ObservabilityPipelineQuotaProcessorType";

/**
 * The Quota Processor measures logging traffic for logs that match a specified filter. When the configured daily quota is met, the processor can drop or alert.
 */
export class ObservabilityPipelineQuotaProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * If set to `true`, logs that matched the quota filter and sent after the quota has been met are dropped; only logs that did not match the filter query continue through the pipeline.
   */
  "dropEvents"?: boolean;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * If `true`, the processor skips quota checks when partition fields are missing from the logs.
   */
  "ignoreWhenMissingPartitions"?: boolean;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * The maximum amount of data or number of events allowed before the quota is enforced. Can be specified in bytes or events.
   */
  "limit": ObservabilityPipelineQuotaProcessorLimit;
  /**
   * Name of the quota.
   */
  "name": string;
  /**
   * The action to take when the quota is exceeded. Options:
   * - `drop`: Drop the event.
   * - `no_action`: Let the event pass through.
   * - `overflow_routing`: Route to an overflow destination.
   */
  "overflowAction"?: ObservabilityPipelineQuotaProcessorOverflowAction;
  /**
   * A list of alternate quota rules that apply to specific sets of events, identified by matching field values. Each override can define a custom limit.
   */
  "overrides"?: Array<ObservabilityPipelineQuotaProcessorOverride>;
  /**
   * A list of fields used to segment log traffic for quota enforcement. Quotas are tracked independently by unique combinations of these field values.
   */
  "partitionFields"?: Array<string>;
  /**
   * The processor type. The value should always be `quota`.
   */
  "type": ObservabilityPipelineQuotaProcessorType;
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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
    dropEvents: {
      baseName: "drop_events",
      type: "boolean",
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
    ignoreWhenMissingPartitions: {
      baseName: "ignore_when_missing_partitions",
      type: "boolean",
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "ObservabilityPipelineQuotaProcessorLimit",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    overflowAction: {
      baseName: "overflow_action",
      type: "ObservabilityPipelineQuotaProcessorOverflowAction",
    },
    overrides: {
      baseName: "overrides",
      type: "Array<ObservabilityPipelineQuotaProcessorOverride>",
    },
    partitionFields: {
      baseName: "partition_fields",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineQuotaProcessorType",
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
    return ObservabilityPipelineQuotaProcessor.attributeTypeMap;
  }

  public constructor() {}
}
