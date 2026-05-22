import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineTagCardinalityLimitProcessorAction } from "./ObservabilityPipelineTagCardinalityLimitProcessorAction";
import { ObservabilityPipelineTagCardinalityLimitProcessorPerMetricMode } from "./ObservabilityPipelineTagCardinalityLimitProcessorPerMetricMode";
import { ObservabilityPipelineTagCardinalityLimitProcessorPerTagLimit } from "./ObservabilityPipelineTagCardinalityLimitProcessorPerTagLimit";

/**
 * A cardinality override applied to a specific metric.
 */
export class ObservabilityPipelineTagCardinalityLimitProcessorPerMetricLimit {
  /**
   * The action to take when the cardinality limit is exceeded.
   */
  "limitExceededAction"?: ObservabilityPipelineTagCardinalityLimitProcessorAction;
  /**
   * The name of the metric this override applies to.
   */
  "metricName": string;
  /**
   * How the per-metric override is applied. `tracked` enforces a custom limit; `excluded` skips the metric entirely.
   */
  "mode": ObservabilityPipelineTagCardinalityLimitProcessorPerMetricMode;
  /**
   * A list of per-tag cardinality overrides that apply within this metric. Must be omitted when `mode` is `excluded`.
   */
  "perTagLimits"?: Array<ObservabilityPipelineTagCardinalityLimitProcessorPerTagLimit>;
  /**
   * The maximum number of distinct tag value combinations allowed for this metric. Required when `mode` is `tracked`. Must be omitted when `mode` is `excluded`.
   */
  "valueLimit"?: number;
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
    limitExceededAction: {
      baseName: "limit_exceeded_action",
      type: "ObservabilityPipelineTagCardinalityLimitProcessorAction",
    },
    metricName: {
      baseName: "metric_name",
      type: "string",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineTagCardinalityLimitProcessorPerMetricMode",
      required: true,
    },
    perTagLimits: {
      baseName: "per_tag_limits",
      type: "Array<ObservabilityPipelineTagCardinalityLimitProcessorPerTagLimit>",
    },
    valueLimit: {
      baseName: "value_limit",
      type: "number",
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
    return ObservabilityPipelineTagCardinalityLimitProcessorPerMetricLimit.attributeTypeMap;
  }

  public constructor() {}
}
