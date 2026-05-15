import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostMetric } from "./CostMetric";

/**
 * List of available Cloud Cost Management metrics for the requested period.
 */
export class CostMetricsResponse {
  /**
   * List of available metrics.
   */
  "data": Array<CostMetric>;
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
      type: "Array<CostMetric>",
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
    return CostMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
