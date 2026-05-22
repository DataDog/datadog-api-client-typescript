import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAggregateProcessorMode } from "./ObservabilityPipelineAggregateProcessorMode";
import { ObservabilityPipelineAggregateProcessorType } from "./ObservabilityPipelineAggregateProcessorType";

/**
 * The `aggregate` processor combines metrics that share the same name and tags into a single metric over a configurable interval.
 *
 * **Supported pipeline types:** metrics
 */
export class ObservabilityPipelineAggregateProcessor {
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
   * A Datadog search query used to determine which metrics this processor targets.
   */
  "include": string;
  /**
   * The interval, in seconds, over which metrics are aggregated.
   */
  "intervalSecs": number;
  /**
   * The aggregation mode applied to metrics that share the same name and tags within the interval.
   */
  "mode": ObservabilityPipelineAggregateProcessorMode;
  /**
   * The processor type. The value must be `aggregate`.
   */
  "type": ObservabilityPipelineAggregateProcessorType;
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
    intervalSecs: {
      baseName: "interval_secs",
      type: "number",
      required: true,
      format: "int64",
    },
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineAggregateProcessorMode",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAggregateProcessorType",
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
    return ObservabilityPipelineAggregateProcessor.attributeTypeMap;
  }

  public constructor() {}
}
