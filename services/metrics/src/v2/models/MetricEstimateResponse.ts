import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricEstimate } from "./MetricEstimate";

/**
 * Response object that includes metric cardinality estimates.
 */
export class MetricEstimateResponse {
  /**
   * Object for a metric cardinality estimate.
   */
  "data"?: MetricEstimate;
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
    data: {
      baseName: "data",
      type: "MetricEstimate",
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
    return MetricEstimateResponse.attributeTypeMap;
  }

  public constructor() {}
}
