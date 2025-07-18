import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response metadata object.
 */
export class MetricTagCardinalitiesMeta {
  /**
   * The name of metric for which the tag cardinalities are returned.
   * This matches the metric name provided in the request.
   */
  "metricName"?: string;
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
    metricName: {
      baseName: "metric_name",
      type: "string",
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
    return MetricTagCardinalitiesMeta.attributeTypeMap;
  }

  public constructor() {}
}
