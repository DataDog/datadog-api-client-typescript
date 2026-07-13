import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSMetricNameFilters } from "./AWSMetricNameFilters";

/**
 * AWS metric name filter preview request attributes.
 */
export class AWSMetricNameFilterPreviewRequestAttributes {
  /**
   * The metric name filters to preview.
   */
  "metricNameFilters": Array<AWSMetricNameFilters>;
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
    metricNameFilters: {
      baseName: "metric_name_filters",
      type: "Array<AWSMetricNameFilters>",
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
    return AWSMetricNameFilterPreviewRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
