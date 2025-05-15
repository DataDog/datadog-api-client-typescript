import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineGeneratedMetricMetricType } from "./ObservabilityPipelineGeneratedMetricMetricType";
import { ObservabilityPipelineMetricValue } from "./ObservabilityPipelineMetricValue";

/**
 * Defines a log-based custom metric, including its name, type, filter, value computation strategy,
 * and optional grouping fields.
 */
export class ObservabilityPipelineGeneratedMetric {
  /**
   * Optional fields used to group the metric series.
   */
  "groupBy"?: Array<string>;
  /**
   * Datadog filter query to match logs for metric generation.
   */
  "include": string;
  /**
   * Type of metric to create.
   */
  "metricType": ObservabilityPipelineGeneratedMetricMetricType;
  /**
   * Name of the custom metric to be created.
   */
  "name": string;
  /**
   * Specifies how the value of the generated metric is computed.
   */
  "value": ObservabilityPipelineMetricValue;
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
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    metricType: {
      baseName: "metric_type",
      type: "ObservabilityPipelineGeneratedMetricMetricType",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "ObservabilityPipelineMetricValue",
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
    return ObservabilityPipelineGeneratedMetric.attributeTypeMap;
  }

  public constructor() {}
}
