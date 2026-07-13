import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineTagCardinalityLimitProcessorAction } from "./ObservabilityPipelineTagCardinalityLimitProcessorAction";
import { ObservabilityPipelineTagCardinalityLimitProcessorOverrideType } from "./ObservabilityPipelineTagCardinalityLimitProcessorOverrideType";
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
   * How the override is applied. `limit_override` enforces a custom limit; `excluded` omits the metric or tag from cardinality tracking.
   */
  "overrideType": ObservabilityPipelineTagCardinalityLimitProcessorOverrideType;
  /**
   * A list of per-tag cardinality overrides that apply within this metric. Must be omitted when `override_type` is `excluded`.
   */
  "perTagLimits"?: Array<ObservabilityPipelineTagCardinalityLimitProcessorPerTagLimit>;
  /**
   * The maximum number of distinct tag value combinations allowed for this metric. Required when `override_type` is `limit_override`. Must be omitted when `override_type` is `excluded`.
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
    overrideType: {
      baseName: "override_type",
      type: "ObservabilityPipelineTagCardinalityLimitProcessorOverrideType",
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
