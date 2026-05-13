import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostAnomalyResponseData } from "./CostAnomalyResponseData";

/**
 * Response object containing a single Cloud Cost Management anomaly.
 */
export class CostAnomalyResponse {
  /**
   * Resource wrapper for a single cost anomaly.
   */
  "data"?: CostAnomalyResponseData;
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
      type: "CostAnomalyResponseData",
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
    return CostAnomalyResponse.attributeTypeMap;
  }

  public constructor() {}
}
