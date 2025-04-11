import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metric origin information.
 */
export class MetricOrigin {
  /**
   * The origin metric type code
   */
  "metricType"?: number;
  /**
   * The origin product code
   */
  "product"?: number;
  /**
   * The origin service code
   */
  "service"?: number;
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
    metricType: {
      baseName: "metric_type",
      type: "number",
      format: "int32",
    },
    product: {
      baseName: "product",
      type: "number",
      format: "int32",
    },
    service: {
      baseName: "service",
      type: "number",
      format: "int32",
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
    return MetricOrigin.attributeTypeMap;
  }

  public constructor() {}
}
