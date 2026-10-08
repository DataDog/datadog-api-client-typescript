import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAggregateProcessorAggregationTimingType } from "./ObservabilityPipelineAggregateProcessorAggregationTimingType";

/**
 * Configures how metrics are assigned to aggregation windows. When omitted, metrics are grouped using system time.
 */
export class ObservabilityPipelineAggregateProcessorAggregationTiming {
  /**
   * Grace period, in seconds, for late-arriving metrics when using event time. Defaults to 10 seconds when omitted.
   */
  "allowedLatenessSecs"?: number;
  /**
   * Determines whether metrics are assigned to aggregation windows based on when they are processed or their timestamps.
   */
  "type": ObservabilityPipelineAggregateProcessorAggregationTimingType;
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
    allowedLatenessSecs: {
      baseName: "allowed_lateness_secs",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAggregateProcessorAggregationTimingType",
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
    return ObservabilityPipelineAggregateProcessorAggregationTiming.attributeTypeMap;
  }

  public constructor() {}
}
