import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineTagCardinalityLimitProcessorAction } from "./ObservabilityPipelineTagCardinalityLimitProcessorAction";
import { ObservabilityPipelineTagCardinalityLimitProcessorPerMetricLimit } from "./ObservabilityPipelineTagCardinalityLimitProcessorPerMetricLimit";
import { ObservabilityPipelineTagCardinalityLimitProcessorType } from "./ObservabilityPipelineTagCardinalityLimitProcessorType";

/**
 * The `tag_cardinality_limit` processor caps the number of distinct tag value combinations on metrics, dropping tags or events once the limit is exceeded.
 *
 * **Supported pipeline types:** metrics
 */
export class ObservabilityPipelineTagCardinalityLimitProcessor {
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
   * The action to take when the cardinality limit is exceeded.
   */
  "limitExceededAction": ObservabilityPipelineTagCardinalityLimitProcessorAction;
  /**
   * A list of per-metric cardinality overrides that take precedence over the default `value_limit`.
   */
  "perMetricLimits"?: Array<ObservabilityPipelineTagCardinalityLimitProcessorPerMetricLimit>;
  /**
   * The processor type. The value must be `tag_cardinality_limit`.
   */
  "type": ObservabilityPipelineTagCardinalityLimitProcessorType;
  /**
   * The default maximum number of distinct tag value combinations allowed per metric.
   */
  "valueLimit": number;
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
    limitExceededAction: {
      baseName: "limit_exceeded_action",
      type: "ObservabilityPipelineTagCardinalityLimitProcessorAction",
      required: true,
    },
    perMetricLimits: {
      baseName: "per_metric_limits",
      type: "Array<ObservabilityPipelineTagCardinalityLimitProcessorPerMetricLimit>",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineTagCardinalityLimitProcessorType",
      required: true,
    },
    valueLimit: {
      baseName: "value_limit",
      type: "number",
      required: true,
      format: "int64",
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
    return ObservabilityPipelineTagCardinalityLimitProcessor.attributeTypeMap;
  }

  public constructor() {}
}
