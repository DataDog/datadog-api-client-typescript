import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostMetricType } from "./CostMetricType";

/**
 * A Cloud Cost Management metric that has data for the requested period.
 */
export class CostMetric {
  /**
   * The metric name, for example `aws.cost.net.amortized`.
   */
  "id": string;
  /**
   * Type of the Cloud Cost Management available metric resource.
   */
  "type": CostMetricType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostMetricType",
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
    return CostMetric.attributeTypeMap;
  }

  public constructor() {}
}
